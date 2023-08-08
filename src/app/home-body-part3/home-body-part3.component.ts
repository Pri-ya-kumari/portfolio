import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-body-part3',
  templateUrl: './home-body-part3.component.html',
  styleUrls: ['./home-body-part3.component.css']
})
export class HomeBodyPart3Component {

  public btn1 = 'button1'
  constructor(private router: Router) {
  }
  goToIndex() {
    this.router.navigate(['/', 'carrerpage']);
  }
}
