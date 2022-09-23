import { Component, OnInit } from '@angular/core';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  git = faGithub
  telegram = faTelegram;
  linked = faLinkedin;
  constructor() {}

  ngOnInit(): void {}
}
