import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { EnterbuttonComponent } from './enterbutton/enterbutton.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule} from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Nopage404Component } from './nopage404/nopage404.component';
import { AboutComponent } from './about/about.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { SideDesignComponent } from './side-design/side-design.component';
import { ImagesComponent } from './images/images.component';
import { ContentComponent } from './content/content.component';
import { BodyPartComponent } from './home-body-part/body-part.component';
import { HomeBodyPart2Component } from './home-body-part2/home-body-part2.component';
import { HomeBodyPart3Component } from './home-body-part3/home-body-part3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeBodyPart4Component } from './home-body-part4/home-body-part4.component';
import { HomeBodyPart5Component } from './home-body-part5/home-body-part5.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AboutPart1Component } from './about-part1/about-part1.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectPart1Component } from './project-part1/project-part1.component';
import { ProjectHeadComponent } from './project-head/project-head.component';
import { ProjectPart2Component } from './project-part2/project-part2.component';
import { AllpComponent } from './allp/allp.component';
import { ContactPart1Component } from './contact-part1/contact-part1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainpageComponent,
    EnterbuttonComponent,
    NavbarComponent,
    Nopage404Component,
    AboutComponent,
    CarrerComponent,
    ProjectComponent,
    ContactComponent,
    SideDesignComponent,
    ImagesComponent,
    ContentComponent,
    BodyPartComponent,
    HomeBodyPart2Component,
    HomeBodyPart3Component,
    HomeBodyPart4Component,
    HomeBodyPart5Component,
    FooterComponent,
    AboutPart1Component,
    FaqComponent,
    ProjectPart1Component,
    ProjectHeadComponent,
    ProjectPart2Component,
    AllpComponent,
    ContactPart1Component,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
