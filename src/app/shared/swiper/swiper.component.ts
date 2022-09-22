import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-swiper',
  template: `
    <swiper
      [config]="config"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
    >
      <ng-template swiperSlide>Slide 1</ng-template>

    </swiper>
  `,
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper([swiper]: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  constructor() {}

  ngOnInit(): void {}
}
