import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HomeComponent } from './home/home.component';
import { Nopage404Component } from './nopage404/nopage404.component';
import { AboutComponent } from './about/about.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { ProjectHeadComponent } from './project-head/project-head.component';
import { ProjectPart1Component } from './project-part1/project-part1.component';
import { ProjectPart2Component } from './project-part2/project-part2.component';
import { AllpComponent } from './allp/allp.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'mainpage',
    component:MainpageComponent,
  },
  {
    path:'aboutpage',
    component:AboutComponent
  },
  {
    path:'homepage',
    component:HomeComponent
  },
  {
    path:'carrerpage',
    component:CarrerComponent
  },
  {
    path:'projectpage',
    component:ProjectComponent,
    children:[
      {
        path:'Htmlpage',
        component:ProjectPart1Component
      },
      {
        path:'Angularpage',
        component:ProjectPart2Component
      },
    ]
  },
  {
    path:'allprojectpage',
    component:AllpComponent,
    
  },
  {
    path:'contactpage',
    component:ContactComponent
  },
  {
    path:'**',
    component:Nopage404Component

  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
