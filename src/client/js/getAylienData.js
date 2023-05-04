const getAylienData = async (formText) => {
    const response = await fetch('http://localhost:8081/aylien', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: formText})
    });
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error', error);
    }
}

export { getAylienData }
