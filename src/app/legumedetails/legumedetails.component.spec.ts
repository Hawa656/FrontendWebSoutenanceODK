import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumedetailsComponent } from './legumedetails.component';

describe('LegumedetailsComponent', () => {
  let component: LegumedetailsComponent;
  let fixture: ComponentFixture<LegumedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
