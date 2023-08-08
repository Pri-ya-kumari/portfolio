import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-head',
  templateUrl: './project-head.component.html',
  styleUrls: ['./project-head.component.css']
})
export class ProjectHeadComponent {
  constructor(private router: Router) {
  }
  
  goToall(){
    this.router.navigate(['/', 'allprojectpage']);
  }
  goToHtml() {
    this.router.navigate(['/projectpage', 'Htmlpage']);
  }
  goToAmgular() {
    this.router.navigate(['/projectpage', 'Angularpage']);
  }
}
