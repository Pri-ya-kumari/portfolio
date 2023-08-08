import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyPart2Component } from './home-body-part2.component';

describe('HomeBodyPart2Component', () => {
  let component: HomeBodyPart2Component;
  let fixture: ComponentFixture<HomeBodyPart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBodyPart2Component]
    });
    fixture = TestBed.createComponent(HomeBodyPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
