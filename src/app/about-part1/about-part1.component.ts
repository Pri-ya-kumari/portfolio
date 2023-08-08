import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-part1',
  templateUrl: './about-part1.component.html',
  styleUrls: ['./about-part1.component.css']
})
export class AboutPart1Component {
  constructor(private router: Router) {
  }

  git() {
    window.location.href = 'https://github.com/Pri-ya-kumari?tab=repositories'
  }
  linkedin() {
    window.location.href = 'https://www.linkedin.com/in/priya-singh-7089b6205/'
  }
  twiiter() {
    window.location.href = 'https://twitter.com/priyasi14634570'
  }
  downloadresume() {
    this.router.navigate(['/', 'mainpage']);
  }
}
