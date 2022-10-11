
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, EffectFade, Autoplay } from 'swiper';


@Component({
  selector: 'app-image-slider',
  template: `
    <section>
      <div class="gradienttop"></div>
      <swiper [config]="config" (swiper)="onSwiper($event)">
        <ng-template swiperSlide>
          <app-images></app-images>
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
    direction: 'horizontal',
    breakpoints: {
      740: {
        slidesPerView: 1,
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
