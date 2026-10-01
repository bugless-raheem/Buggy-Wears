import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initReveals } from './reveals.js';

gsap.registerPlugin(ScrollTrigger);

export function initScrollExperience() {
  initReveals();

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
    syncTouch: false,
  });

  const updateScrollTriggers = () => ScrollTrigger.update();
  const tick = (time) => lenis.raf(time * 1000);
  const refreshAfterImages = () => ScrollTrigger.refresh();

  lenis.on('scroll', updateScrollTriggers);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);
  window.addEventListener('load', refreshAfterImages, { once: true });

  const cleanup = () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
  window.addEventListener('pagehide', cleanup, { once: true });
}