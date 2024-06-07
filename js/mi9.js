function submitForm() {
    document.getElementById('successModal').style.display = 'flex';
  }

  function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }