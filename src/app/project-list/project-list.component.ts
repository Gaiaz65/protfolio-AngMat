
import { Component, Input } from '@angular/core';
import Project from 'src/app/model/project';


import SwiperCore, { Pagination, Navigation, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination, Navigation]);



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  @Input() projects: Project[] = [];

  config: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    breakpoints: {
      751: {
        slidesPerView: 3,
        loop: true,
      },
      450: {
        slidesPerView: 2,
        loop: true,
      },
    },
  };

  constructor() {}

  onSwiper(swiper: any) {
    setInterval(() => {
      swiper.slideNext(5000);
    }, 0);
  }
}
