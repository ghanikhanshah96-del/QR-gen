'use client';

import { useEffect, useRef } from 'react';

/**
 * Highlights the "On this page" link for the section currently in view.
 * Drop it anywhere inside the TOC <nav>: it finds the nav's #anchor links,
 * watches their target sections, and sets aria-current="location" on the active link
 * (styled via .toc-link[aria-current] in globals.css).
 */
const OFFSET = 120; // px below the sticky header where a section counts as "current"

export default function TocScrollSpy() {
  const ref = useRef(null);

  useEffect(() => {
    const nav = ref.current?.closest('nav');
    if (!nav) return undefined;

    const items = [...nav.querySelectorAll('a[href^="#"]')]
      .map((a) => ({ a, el: document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1))) }))
      .filter((item) => item.el);
    if (!items.length) return undefined;

    let current = null;
    let timer = 0;

    const keepVisible = (link) => {
      const box = link.closest('.overflow-y-auto');
      if (!box) return;
      const l = link.getBoundingClientRect();
      const b = box.getBoundingClientRect();
      if (l.top < b.top) box.scrollTop -= b.top - l.top + 8;
      else if (l.bottom > b.bottom) box.scrollTop += l.bottom - b.bottom + 8;
    };

    const update = () => {
      timer = 0;
      let active = items[0];
      for (const item of items) {
        if (item.el.getBoundingClientRect().top - OFFSET <= 0) active = item;
        else break;
      }
      // At the very bottom the last (often short) section can't reach the top, so select it.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) active = items[items.length - 1];

      if (active === current) return;
      current?.a.removeAttribute('aria-current');
      active.a.setAttribute('aria-current', 'location');
      current = active;
      keepVisible(active.a);
    };

    // Light throttle (max ~20 updates/s). A timer rather than requestAnimationFrame, which
    // browsers pause in some states (e.g. embedded or background views).
    const onScroll = () => {
      if (!timer) timer = window.setTimeout(update, 50);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (timer) window.clearTimeout(timer);
      current?.a.removeAttribute('aria-current');
    };
  }, []);

  return <span ref={ref} hidden />;
}
