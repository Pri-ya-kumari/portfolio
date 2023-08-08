import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  ngOnInit(): void{

  }

  accordian = [
    {
      title: 'Bachelor in computer application',
      content: 'hello,i m priya i completed my Graduation from Banasthali vidhyapith Jaipur,Rajasthan in 2023 and scored 83%(8.73 CGPA). '
    },
    {
      title: 'High School',
      content: 'hello,i m priya i completed my 12th from St.lawrence acadmey Patna,Bihar in 2018-2020 from CBSE board and scored 60%. '
    },
    {
      title: 'Secondary School',
      content:'hello,i m priya i completed my 10th from Christ church diocesan school Patna,Bihar in 2016-2017 from CBSE board and scored 80%. '
    }

  ]

  view:any = 'ac_0';
  changeAccordion  = (ac:any) =>{
    this.view = ac;
  } 

}
