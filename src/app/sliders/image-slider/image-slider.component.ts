
import { Component } from '@angular/core';

import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-image-slider',
  template: `
    <section>
      <div class="gradienttop"></div>
      <swiper [config]="config" (swiper)="onSwiper($event)">
        <ng-template swiperSlide>
          <app-tech-logos></app-tech-logos>
        </ng-template>
      </swiper>
      <div class="gradientbot"></div>
    </section>
  `,
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    effect: 'fade',
    direction: 'horizontal',
    breakpoints: {
      751: {
        slidesPerView: 1,
        effect: 'fade',
        allowTouchMove: false,
        loop: true,
        direction: 'vertical',
      },
    },
  };
  onSwiper(swiper: any) {
    setInterval(() => {
      swiper.slideNext(40000);
    }, 0);
  }
}
