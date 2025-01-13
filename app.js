document.querySelectorAll('.slider').forEach(slider => {
  const container = slider.closest('.container');
  slider.addEventListener('input', (e) => {
    const value = `${e.target.value}%`;
    container.style.setProperty('--position', value);
  });
});
