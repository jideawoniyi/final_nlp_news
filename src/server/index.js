const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();
const fetch = import('node-fetch').then(module => module.default);

const app = express()
const port = 3000

dotenv.config()
console.log(`Your API key is ${process.env.API_KEY}`);
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/analysis', async function (req, res) {
    try {
        const url = req.body.url
        const api_url = `https://api.aylien.com/api/v1/sentiment?url=${url}`
        const headers = {
            'X-AYLIEN-TextAPI-Application-Key': process.env.API_KEY,
            'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID
        }
        const response = await fetch(api_url, { headers: headers })
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, function () {
    console.log(`Server is listening on port ${port}!`)
})
