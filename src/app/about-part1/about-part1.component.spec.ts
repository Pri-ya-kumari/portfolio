import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPart1Component } from './about-part1.component';

describe('AboutPart1Component', () => {
  let component: AboutPart1Component;
  let fixture: ComponentFixture<AboutPart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPart1Component]
    });
    fixture = TestBed.createComponent(AboutPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
