
import { Component, OnInit } from '@angular/core';
import Project from '../model/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private prService: ProjectService) {
    this.projects = this.prService.projects;
  }

  ngOnInit(): void {}
}
