document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const htmlElement = document.documentElement;
  const darkBtn = document.querySelector('[data-bs-theme-value="dark"]');
  const lightBtn = document.querySelector('[data-bs-theme-value="light"]');

  // Toggle button
  if (toggleButton) {
    toggleButton.addEventListener('click', function () {
      const currentTheme = htmlElement.getAttribute('data-bs-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      htmlElement.setAttribute('data-bs-theme', newTheme);
    });
  }

  // Header Dark button
  if (darkBtn) {
    darkBtn.addEventListener('click', function () {
      htmlElement.setAttribute('data-bs-theme', 'dark');
    });
  }

  // Header Light button
  if (lightBtn) {
    lightBtn.addEventListener('click', function () {
      htmlElement.setAttribute('data-bs-theme', 'light');
    });
  }
});