import { Component } from '@angular/core';

@Component({
  selector: 'app-home-body-part5',
  templateUrl: './home-body-part5.component.html',
  styleUrls: ['./home-body-part5.component.css']
})
export class HomeBodyPart5Component {
  save(formData:any){
    alert("your form is submited");
  }
}
