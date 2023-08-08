import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyPart4Component } from './home-body-part4.component';

describe('HomeBodyPart4Component', () => {
  let component: HomeBodyPart4Component;
  let fixture: ComponentFixture<HomeBodyPart4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodyPart4Component]
    });
    fixture = TestBed.createComponent(HomeBodyPart4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
