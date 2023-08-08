import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyPart3Component } from './home-body-part3.component';

describe('HomeBodyPart3Component', () => {
  let component: HomeBodyPart3Component;
  let fixture: ComponentFixture<HomeBodyPart3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodyPart3Component]
    });
    fixture = TestBed.createComponent(HomeBodyPart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
