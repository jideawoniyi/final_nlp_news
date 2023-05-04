const updateUI = async (data) => {
    document.getElementById('text').innerHTML = `Text: ${data.text}`;
    document.getElementById('polarity').innerHTML = `Polarity: ${data.polarity}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
}

export { updateUI }
