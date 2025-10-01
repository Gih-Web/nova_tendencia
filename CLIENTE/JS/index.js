document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');

    if (btn.classList.contains('liked')) {
      // Descurtir: volta para contorno
      icon.classList.replace('bi-heart-fill', 'bi-heart');
      btn.classList.remove('liked');
    } else {
      // Curtir: muda para preenchido
      icon.classList.replace('bi-heart', 'bi-heart-fill');
      btn.classList.add('liked');
    }
  });
});
