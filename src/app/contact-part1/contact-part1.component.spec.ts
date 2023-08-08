import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPart1Component } from './contact-part1.component';

describe('ContactPart1Component', () => {
  let component: ContactPart1Component;
  let fixture: ComponentFixture<ContactPart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPart1Component]
    });
    fixture = TestBed.createComponent(ContactPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
