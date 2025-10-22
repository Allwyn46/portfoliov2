import { Injectable, NgZone } from '@angular/core';
import Lenis from '@studio-freight/lenis';

@Injectable({
  providedIn: 'root',
})
export class LenisService {
  private lenis!: Lenis;
  private animationFrameId: number | null = null;

  constructor(private ngZone: NgZone) {}

  init() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Run animation outside Angular’s zone for performance
    this.ngZone.runOutsideAngular(() => {
      const raf = (time: number) => {
        this.lenis.raf(time);
        this.animationFrameId = requestAnimationFrame(raf);
      };
      this.animationFrameId = requestAnimationFrame(raf);
    });
  }

  destroy() {
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.lenis?.destroy();
  }

  scrollTo(target: HTMLElement | string, offset = 0) {
    if (!this.lenis) return;

    const element = typeof target === 'string' ? document.getElementById(target) : target;

    if (element) {
      this.lenis.scrollTo(element, { offset });
    } else {
      console.warn(`❌ Element not found for id: ${target}`);
    }
  }
}
