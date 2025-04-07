import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

interface CarouselItem {
  id: number;
  title: string;
  color: string;
}


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel-container">
      <button class="carousel-button prev" (click)="prevSlide()">←</button>
      
      <div *ngFor="let item of items; let i = index"
           class="carousel-item"
           [class.active]="i === currentIndex"
           [class.prev]="i === getPrevIndex()"
           [class.next]="i === getNextIndex()"
           [style.background]="item.color">
        <h2>{{ item.title }}</h2>
      </div>
      
      <button class="carousel-button next" (click)="nextSlide()">→</button>
    </div>
  `
})
export class CarouselComponent implements OnInit, OnDestroy {
  items: CarouselItem[] = [
    { id: 1, title: 'Slide 1', color: '#FF6B6B' },
    { id: 2, title: 'Slide 2', color: '#4ECDC4' },
    { id: 3, title: 'Slide 3', color: '#45B7D1' },
    { id: 4, title: 'Slide 4', color: '#96CEB4' },
    { id: 5, title: 'Slide 5', color: '#FFEEAD' }
  ];

  currentIndex = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  getPrevIndex(): number {
    return this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
  }

  getNextIndex(): number {
    return this.currentIndex === this.items.length - 1 ? 0 : this.currentIndex + 1;
  }

  prevSlide() {
    this.stopAutoPlay();
    this.currentIndex = this.getPrevIndex();
    this.startAutoPlay();
  }

  nextSlide() {
    this.stopAutoPlay();
    this.currentIndex = this.getNextIndex();
    this.startAutoPlay();
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarouselComponent],
  template: `
    <div style="padding: 20px;">
      <h1>Angular Carousel Demo</h1>
      <app-carousel></app-carousel>
    </div>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
