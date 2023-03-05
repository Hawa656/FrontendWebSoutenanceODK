import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitdetailsComponent } from './fruitdetails.component';

describe('FruitdetailsComponent', () => {
  let component: FruitdetailsComponent;
  let fixture: ComponentFixture<FruitdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
