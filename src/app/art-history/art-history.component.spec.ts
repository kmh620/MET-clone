import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtHistoryComponent } from './art-history.component';

describe('ArtHistoryComponent', () => {
  let component: ArtHistoryComponent;
  let fixture: ComponentFixture<ArtHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
