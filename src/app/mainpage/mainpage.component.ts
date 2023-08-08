import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  
    constructor(private router: Router) {
    }
  
    goToIndex() {
      this.router.navigate(['', 'homepage']);
    }
    goToabout(){
      this.router.navigate(['', 'aboutpage']);
    }
    goTocarrer(){
      this.router.navigate(['', 'carrerpage']);
    }
    goToproject(){
      this.router.navigate(['', 'allprojectpage']);
    }
    goTocontact(){
      this.router.navigate(['', 'contactpage']);
    }
}
