import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterbuttonComponent } from './enterbutton.component';

describe('EnterbuttonComponent', () => {
  let component: EnterbuttonComponent;
  let fixture: ComponentFixture<EnterbuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterbuttonComponent]
    });
    fixture = TestBed.createComponent(EnterbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
