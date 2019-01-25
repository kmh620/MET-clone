import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionCurrentComponent } from './exhibition-current.component';

describe('ExhibitionCurrentComponent', () => {
  let component: ExhibitionCurrentComponent;
  let fixture: ComponentFixture<ExhibitionCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
