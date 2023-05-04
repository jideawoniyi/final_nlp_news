const url = `https://api.aylien.com/news/stories`;
const requestData = {
  "text": "Text to be analyzed", // Replace with the text to be analyzed
  "language": "en", // Replace with the language of the text
  "entity_type": "organization,person" // Replace with the entity types you want to extract
};


fetch(url, {
  method: 'POST', // or GET, PUT, DELETE, etc.
  headers: {
    'Content-Type': 'application/json',
    'X-AYLIEN-TextAPI-Application-Key': process.env.API_KEY,
    'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID
  },
  body: JSON.stringify(requestData)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // handle response data here
  })
  .catch(error => {
    console.error('Error:', error);
  });


  