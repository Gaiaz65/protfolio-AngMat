
import { Component, Input, OnInit } from '@angular/core';
import Project from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  projects: Project[] = [

  ];

  constructor(private prService: ProjectService) {
    this.projects = this.prService.projects
  }

  ngOnInit(): void {}
}
