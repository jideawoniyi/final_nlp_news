async function handleSubmit(event) {
    event.preventDefault();
  
    const formText = document.getElementById('article-url').value;
  
    if (Client.checkForUrl(formText)) {
      try {
        // Make a POST request to the server API endpoint
        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ url: formText })
        });
  
        // Get the response data as JSON
        const data = await response.json();
  
        // Update the UI with the response data
        Client.updateUI(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please enter a valid URL');
    }
  }
  
  export { handleSubmit };
  