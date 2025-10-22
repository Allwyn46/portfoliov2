import { Component } from '@angular/core';
import { LenisService } from 'src/app/services/lenis';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(private lenisService: LenisService) {}
  private isScrolling = false;

  onScrollDown(event: WheelEvent) {
    // Ignore multiple triggers during one scroll
    if (this.isScrolling) return;

    // If user scrolls down
    if (event.deltaY > 0) {
      this.isScrolling = true;
      this.lenisService.scrollTo('experience');
      // Prevent re-triggering immediately
      setTimeout(() => (this.isScrolling = false), 1000);
    }
  }
}
