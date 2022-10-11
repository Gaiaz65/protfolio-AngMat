import { Component, OnInit } from '@angular/core';
import { faAngular, faDocker, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faGulp } from '@fortawesome/free-brands-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPrescription } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  breakpoint:boolean = false
  imageSize:SizeProp = '6x'

  setInnerwidth () {
    let innerwidth = window.innerWidth;

    if(innerwidth<750) {
      this.breakpoint = true;
    } else {
      this.breakpoint = false;
    }
    if (innerwidth<400) {
      this.imageSize = "4x"
    }else {
      this.imageSize = "6x";
    }
  }

  iconsTech = [
    faAngular,
    faJs,
    faCss3,
    faHtml5,
    faGithub,
    faPrescription,
    faNpm,
  ];
  iconsSup = [
    faBootstrap,
    faGulp,
    faFigma,
    faTrello,
    faJira,
    faGitAlt,
    faDocker,
  ];

  bootstrap = faBootstrap;

  css = faCss3;
  jira = faJira;
  docker = faDocker;
  js = faJs;
  html = faHtml5;
  trello = faTrello;
  figma = faFigma;
  gitHub = faGithub
  constructor() {}

  ngOnInit(): void {
    this.setInnerwidth();
  }
}
