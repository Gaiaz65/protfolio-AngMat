import { Component, OnInit } from '@angular/core';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Project from '../model/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  project!: Project;
  projects: Project[] = [];
  breakpoint!: boolean;
  imageSize: SizeProp = '3x';
  faGithub = faGithub;
  faLink = faLink;

  constructor(private prService: ProjectService) {
    this.projects = this.prService.projects;
    this.project = this.projects[2];
  }

  innerwidthCheck() {
    let innerwidth = window.innerWidth;

    if (innerwidth < 800) {
      this.breakpoint = false;
    } else {
      this.breakpoint = true;
    }
    if (innerwidth < 450) {
      this.imageSize = '2x';
    } else {
      this.imageSize = '3x';
    }
  }

  ngOnInit(): void {
    this.innerwidthCheck();
  }
}
