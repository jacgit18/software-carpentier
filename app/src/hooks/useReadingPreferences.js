import { useLayoutEffect, useRef, useState } from 'react';

function saved(key, allowed, fallback) {
  try {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : fallback;
  } catch { return fallback; }
}

export default function useReadingPreferences() {
  const [theme, updateTheme] = useState(() => saved('reading-theme', ['blueprint', 'light', 'dark'], 'blueprint'));
  const [size, setSize] = useState(() => saved('reading-size', ['standard', 'large'], 'standard'));
  const baseTheme = useRef(saved('reading-base-theme', ['blueprint', 'light'], 'blueprint'));

  useLayoutEffect(() => {
    if (theme !== 'dark') baseTheme.current = theme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.textSize = size;
    try {
      localStorage.setItem('reading-theme', theme);
      localStorage.setItem('reading-size', size);
      localStorage.setItem('reading-base-theme', baseTheme.current);
    } catch { /* Reading controls work even when browser storage is unavailable. */ }
  }, [theme, size]);

  return {
    theme,
    size,
    setTheme: updateTheme,
    setSize,
    toggleDark: () => updateTheme(current => current === 'dark' ? baseTheme.current : 'dark'),
  };
}
