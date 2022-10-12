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
      images: [
        'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/videoPic.jpeg?raw=true',
      ],
      description:
        'Video platform with the ability to upload and play videos. It uses FireBase as the main DataBase, Tailwind as the main source of styles.',
      title: 'Game Platform',
      subtitle:
        'Teaser platrom with videos,Teaser platrom with videos,Teaser platrom with videos,Teaser platrom with videos',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: [
        'https://camo.githubusercontent.com/29026b68c52288230bf32bc2268e47e5c3b81dba23106fb062fcc0541f8e9529/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e67756c61722d4444303033313f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/c6d805e64fe5ff8954a609a0ec5d93079fac3d7c11daf766358893438aef4757/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72786a732d2532334237313738432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d726561637469766578266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465',
      ],
      tasks: [
        'Working with components, directives, pipes, services, classes',
        'Using Tailwind for styling',
        'Uploading videos and making screenshots for thumbnails with FFmpeg',
        'Using GIT, RxJS',
        'Deploying the SPA with Vercel',
      ],
    },
    {
      img: 'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/4.png?raw=true',
      images: [
        'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/videoPic.jpeg?raw=true',
      ],
      title: 'Game Platform',
      subtitle: 'Teaser platrom with videos',
      description:
        'Video platform with the ability to upload and play videos. It uses FireBase as the main DataBase, Tailwind as the main source of styles.',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: [
        'https://camo.githubusercontent.com/29026b68c52288230bf32bc2268e47e5c3b81dba23106fb062fcc0541f8e9529/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e67756c61722d4444303033313f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/c6d805e64fe5ff8954a609a0ec5d93079fac3d7c11daf766358893438aef4757/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72786a732d2532334237313738432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d726561637469766578266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465',
      ],
      tasks: [
        'Working with components, directives, pipes, services, classes',
        'Using Tailwind for styling',
        'Uploading videos and making screenshots for thumbnails with FFmpeg',
        'Using GIT, RxJS',
        'Deploying the SPA with Vercel',
      ],
    },
    {
      img: 'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/4.png?raw=true',
      images: [
        'https://github.com/Gaiaz65/GamePlatform/blob/master/src/assets/RepIMG/videoPic.jpeg?raw=true',
      ],
      title: 'Game Platform',
      subtitle: 'Teaser platrom with videos',
      description:
        'Video platform with the ability to upload and play videos. It uses FireBase as the main DataBase, Tailwind as the main source of styles.',
      gitLink: 'https://github.com/Gaiaz65/GamePlatform',
      projectLink: 'https://teaserousvi-git-master-gaiaz65.vercel.app/',
      technologies: [
        'https://camo.githubusercontent.com/29026b68c52288230bf32bc2268e47e5c3b81dba23106fb062fcc0541f8e9529/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e67756c61722d4444303033313f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c6172266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/c6d805e64fe5ff8954a609a0ec5d93079fac3d7c11daf766358893438aef4757/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72786a732d2532334237313738432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d726561637469766578266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465',
        'https://camo.githubusercontent.com/fbc3df79ffe1a99e482b154b29262ecbb10d6ee4ed22faa82683aa653d72c4e1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769744875622d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465',
      ],
      tasks: [
        'Working with components, directives, pipes, services, classes',
        'Using Tailwind for styling',
        'Uploading videos and making screenshots for thumbnails with FFmpeg',
        'Using GIT, RxJS',
        'Deploying the SPA with Vercel',
      ],
    },
  ];

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  addToDb() {}
}
