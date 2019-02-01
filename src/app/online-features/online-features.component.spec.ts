import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineFeaturesComponent } from './online-features.component';

describe('OnlineFeaturesComponent', () => {
  let component: OnlineFeaturesComponent;
  let fixture: ComponentFixture<OnlineFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
