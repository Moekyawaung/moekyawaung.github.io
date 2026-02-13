const root = document.documentElement;
const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

const saved = localStorage.getItem('theme');
if (saved) {
  root.setAttribute('data-theme', saved);
}