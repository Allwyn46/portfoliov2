import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './components/layout/layout';
import { LenisService } from './services/lenis';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('portfoliov2');

  constructor(private lenisService: LenisService) {}

  ngOnInit() {
    this.lenisService.init();
  }

  ngOnDestroy() {
    this.lenisService.destroy();
  }
}
