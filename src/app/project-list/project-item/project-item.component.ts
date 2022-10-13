import { ProjectService } from 'src/app/services/project.service';

import { Component, OnInit, Input } from '@angular/core';
import Project from 'src/app/model/project';


@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent implements OnInit {
  @Input() project!: Project;
  constructor(private prService: ProjectService) {}

  ngOnInit(): void {}

  showDetails(project:Project) {
    this.prService.showProjectDetails(project)
  }
}


