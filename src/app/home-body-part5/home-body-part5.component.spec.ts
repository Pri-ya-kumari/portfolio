import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyPart5Component } from './home-body-part5.component';

describe('HomeBodyPart5Component', () => {
  let component: HomeBodyPart5Component;
  let fixture: ComponentFixture<HomeBodyPart5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodyPart5Component]
    });
    fixture = TestBed.createComponent(HomeBodyPart5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
