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
  selector: 'app-tech-logos',
  templateUrl: './tech-logos.component.html',
  styleUrls: ['./tech-logos.component.scss'],
})
export class TechLogosComponent implements OnInit {
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
  gitHub = faGithub;
  constructor() {}

  breakpoint: boolean = false;
  imageSize: SizeProp = '6x';

  setInnerwidth() {
    let innerwidth = window.innerWidth;

    if (innerwidth < 750) {
      this.breakpoint = true;
    } else {
      this.breakpoint = false;
    }
    if (innerwidth < 400) {
      this.imageSize = '2x';
    } else {
      this.imageSize = '6x';
    }
  }

  ngOnInit(): void {
    this.setInnerwidth();
  }
}
