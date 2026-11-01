(() => {
  const webhookUrl = 'https://mikebimira.app.n8n.cloud/webhook/42c04181-f71b-4763-8c10-879b760c61a3';
  const dialog = document.getElementById('contact-dialog');
  const form = document.getElementById('contact-form');

  if (!dialog || !form) return;

  const status = form.querySelector('.form-status');
  const submit = form.querySelector('[type="submit"]');

  document.querySelectorAll('[data-open-contact]').forEach((button) => {
    button.addEventListener('click', () => {
      status.textContent = '';
      status.removeAttribute('data-state');
      dialog.showModal();
      form.querySelector('[name="name"]').focus();
    });
  });

  dialog.querySelectorAll('[data-close-contact]').forEach((button) => {
    button.addEventListener('click', () => dialog.close());
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const payload = new URLSearchParams();
    ['name', 'email', 'message', 'website'].forEach((field) => {
      payload.set(field, form.elements[field].value.trim());
    });
    payload.set('source', window.location.href);

    if (payload.get('website')) {
      status.textContent = 'Thanks, your message has been sent.';
      status.dataset.state = 'success';
      form.reset();
      return;
    }

    submit.disabled = true;
    status.textContent = 'Sending your message…';
    status.removeAttribute('data-state');

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: payload.toString()
      });
      if (!response.ok) throw new Error('The webhook returned an error.');
      form.reset();
      status.textContent = 'Thanks, your message has been sent.';
      status.dataset.state = 'success';
    } catch (error) {
      status.textContent = 'We couldn’t send your message. Please email mikebimira@gmail.com instead.';
      status.dataset.state = 'error';
    } finally {
      submit.disabled = false;
    }
  });
})();
