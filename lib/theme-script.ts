// Inline, blocking script injected into <head> so the correct theme applies
// before first paint — avoids a flash of the wrong theme when a visitor has
// previously chosen light/dark explicitly (stored in localStorage) that
// differs from their OS preference.
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {}
})();
`
