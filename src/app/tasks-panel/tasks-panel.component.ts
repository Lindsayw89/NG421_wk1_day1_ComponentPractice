import { Component, OnInit } from '@angular/core';
import thetasks from "../tasks";

@Component({
  selector: 'app-tasks-panel',
  templateUrl: './tasks-panel.component.html',
  styleUrls: ['./tasks-panel.component.css']
})
export class TasksPanelComponent implements OnInit {
tasks=[]
  constructor() { }

  ngOnInit() {
    this.tasks=thetasks;
  }

}
