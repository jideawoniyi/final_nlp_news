import { handleSubmit } from './js/formHandler';
import { getAylienData } from './js/getAylienData';
import { updateUI } from './js/updateUI';
import { handleSubmit } from './js/formHandler';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/main.scss';

// Get the form element from the DOM
const form = document.querySelector('#text-form');

// Add a submit event listener to the form
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const text = formData.get('text');

  try {
    // Make a POST request to your server's API endpoint with the text data
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    });

    // Get the response data as JSON
    const data = await response.json();

    // Update the UI with the response data
    updateUI(data);
  } catch (error) {
    console.error(error);
  }
});

export {
    handleSubmit,
    getAylienData,
    updateUI
}
