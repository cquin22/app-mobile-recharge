import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  projectName:string = 'mySpotify'
}
