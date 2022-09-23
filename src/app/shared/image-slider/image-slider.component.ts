
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectFade, Autoplay } from 'swiper';


@Component({
  selector: 'app-image-slider',
  template: `
    <div class="gradienttop"></div>
    <swiper [config]="config" (swiper)="onSwiper($event)">
      <ng-template swiperSlide>
        <app-images></app-images>
      </ng-template>
    </swiper>
    <div class="gradientbot"></div>
  `,
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent {
  config: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 50,
    direction: 'vertical',
  };
  onSwiper(swiper: any) {
    setInterval(() => {
      swiper.slideNext(50000);
    }, 0);
  }
}
