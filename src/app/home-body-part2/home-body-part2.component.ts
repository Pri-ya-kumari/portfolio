import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-body-part2',
  templateUrl: './home-body-part2.component.html',
  styleUrls: ['./home-body-part2.component.css']
})
export class HomeBodyPart2Component {
  public btn1 = 'button1'
  constructor(private router: Router) {
  }
  gotoabout() {
    this.router.navigate(['/', 'aboutpage']);
  }
  gotocontact() {
    this.router.navigate(['/', 'contactpage']);
  }
}
