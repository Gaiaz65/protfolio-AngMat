import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import Project from '../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      img: 'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/4.png?raw=true',
      title: 'Game Platform',
      subtitle:
        'Teaser platrom with videos,Teaser platrom with videos,Teaser platrom with videos,Teaser platrom with videos',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: ['Angular', 'HTML', 'SCSS', 'Tailwind'],
    },
    {
      img: 'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/4.png?raw=true',
      title: 'Game Platform',
      subtitle: 'Teaser platrom with videos',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: ['Angular', 'HTML', 'SCSS', 'Tailwind'],
    },
    {
      img: 'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/4.png?raw=true',
      title: 'Game Platform',
      subtitle: 'Teaser platrom with videos',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: ['Angular', 'HTML', 'SCSS', 'Tailwind'],
    },
  ];
  // http reQ

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  addToDb() {}
}
