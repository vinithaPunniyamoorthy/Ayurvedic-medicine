// Handle remedy form submission
document.getElementById('remedyForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('/remedy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    document.getElementById('remedyResponse').innerText = result.advice;
  } catch (error) {
    document.getElementById('remedyResponse').innerText = 'Error submitting form.';
  }
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    document.getElementById('contactResponse').innerText = result.message;
  } catch (error) {
    document.getElementById('contactResponse').innerText = 'Error submitting form.';
  }
});
