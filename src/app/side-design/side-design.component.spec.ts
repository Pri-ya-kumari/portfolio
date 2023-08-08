import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDesignComponent } from './side-design.component';

describe('SideDesignComponent', () => {
  let component: SideDesignComponent;
  let fixture: ComponentFixture<SideDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideDesignComponent]
    });
    fixture = TestBed.createComponent(SideDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
