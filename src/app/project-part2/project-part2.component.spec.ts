import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPart2Component } from './project-part2.component';

describe('ProjectPart2Component', () => {
  let component: ProjectPart2Component;
  let fixture: ComponentFixture<ProjectPart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPart2Component]
    });
    fixture = TestBed.createComponent(ProjectPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
