import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumeFruitFruitComponent } from './legume-fruit-fruit.component';

describe('LegumeFruitFruitComponent', () => {
  let component: LegumeFruitFruitComponent;
  let fixture: ComponentFixture<LegumeFruitFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumeFruitFruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumeFruitFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
