import { ListComponent } from './projects/list/list.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './projects/list/project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import { ImagesComponent } from './shared/image-slider/images/images.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactsComponent,
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    ProjectsComponent,
    ProjectComponent,
    ResumeComponent,
    ImageSliderComponent,
    ImagesComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
