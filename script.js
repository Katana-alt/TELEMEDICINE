const form = document.getElementById('paymentForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const phone = document.getElementById('phone').value;
  const amount = document.getElementById('amount').value;

  try {
    const response = await fetch('/make-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, amount }),
    });
    const result = await response.json();
    alert('Payment Initiated! Please check your phone.');
  } catch (error) {
    console.error('Error making payment:', error);
    alert('There was an error processing the payment.');
  }
});


