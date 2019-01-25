import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnStudentComponent } from './learn-student.component';

describe('LearnStudentComponent', () => {
  let component: LearnStudentComponent;
  let fixture: ComponentFixture<LearnStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
