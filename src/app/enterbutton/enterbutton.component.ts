import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enterbutton',
  templateUrl: './enterbutton.component.html',
  styleUrls: ['./enterbutton.component.css']
})
export class EnterbuttonComponent {
  public btn1 = 'button1'
  constructor(private router: Router) {
  }

  goToIndex() {
    this.router.navigate(['/', 'mainpage']);
  }
}
