import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent {
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
