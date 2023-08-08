import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-body-part4',
  templateUrl: './home-body-part4.component.html',
  styleUrls: ['./home-body-part4.component.css']
})
export class HomeBodyPart4Component {

  public btn1 = 'button1'
  constructor(private router: Router) {
  }
  goToproject() {
    this.router.navigate(['/', 'allprojectpage']);
  }

}
