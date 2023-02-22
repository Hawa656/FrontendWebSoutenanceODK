import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtapeComponent } from './ajout-etape.component';

describe('AjoutEtapeComponent', () => {
  let component: AjoutEtapeComponent;
  let fixture: ComponentFixture<AjoutEtapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEtapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEtapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
