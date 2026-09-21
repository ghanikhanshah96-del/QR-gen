import { STORAGE_KEYS } from '../config.js';
import { lsGet, lsSet } from '../storage/local-storage.js';

export function getStoredTheme() {
  return lsGet(STORAGE_KEYS.theme, null);
}

export function resolveTheme(pref) {
  if (pref === 'dark' || pref === 'light') return pref;
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function applyTheme(theme) {
  const next = theme === 'dark' ? 'dark' : 'light';
  const root = document.documentElement;
  root.dataset.theme = next;
  root.classList.toggle('dark', next === 'dark');
  lsSet(STORAGE_KEYS.theme, next);
  return next;
}

export function initTheme() {
  const stored = getStoredTheme();
  return applyTheme(resolveTheme(stored));
}

export function toggleTheme() {
  const current = document.documentElement.dataset.theme || 'light';
  return applyTheme(current === 'dark' ? 'light' : 'dark');
}
