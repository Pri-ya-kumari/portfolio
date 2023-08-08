import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPart1Component } from './project-part1.component';

describe('ProjectPart1Component', () => {
  let component: ProjectPart1Component;
  let fixture: ComponentFixture<ProjectPart1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPart1Component]
    });
    fixture = TestBed.createComponent(ProjectPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
