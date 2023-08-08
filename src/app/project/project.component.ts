import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  constructor(private router: Router) {
  }

  goToIndex() {
    this.router.navigate(['/', 'mainpage']);
  }
  goToabout(){
    this.router.navigate(['/', 'aboutpage']);
  }
  goTocarrer(){
    this.router.navigate(['/', 'carrerpage']);
  }
  goToproject(){
    this.router.navigate(['/', 'allprojectpage']);
  }
  goTocontact(){
    this.router.navigate(['/', 'contactpage']);
  }
}
