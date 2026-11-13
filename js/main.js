(() => {
  const root = document.documentElement;
  const button = document.querySelector('#theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(theme) {
    root.dataset.theme = theme;
    button.textContent = theme === 'dark' ? '☀' : '☾';
    button.setAttribute('aria-label', theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro');
  }

  setTheme(initialTheme);
  button.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();