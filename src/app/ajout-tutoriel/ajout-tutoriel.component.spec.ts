import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTutorielComponent } from './ajout-tutoriel.component';

describe('AjoutTutorielComponent', () => {
  let component: AjoutTutorielComponent;
  let fixture: ComponentFixture<AjoutTutorielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutTutorielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTutorielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
