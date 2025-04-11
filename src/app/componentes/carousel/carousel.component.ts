import { Component } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    { id: 1, title: 'Slide 1', color: 'lightblue', image: '../../../assets/portifolio-projeto.png'},
    { id: 2, title: 'Slide 2', color: 'lightcoral',  image: '../../../assets/portifolio-projeto.png'},
    { id: 3, title: 'Slide 3', color: 'lightgreen',  image: '../../../assets/portifolio-projeto.png'}
  ];

  currentIndex = 0;

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
}
