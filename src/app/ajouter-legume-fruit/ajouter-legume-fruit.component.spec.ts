import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLegumeFruitComponent } from './ajouter-legume-fruit.component';

describe('AjouterLegumeFruitComponent', () => {
  let component: AjouterLegumeFruitComponent;
  let fixture: ComponentFixture<AjouterLegumeFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLegumeFruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLegumeFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
