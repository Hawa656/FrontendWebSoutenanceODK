import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfruitComponent } from './modifierfruit.component';

describe('ModifierfruitComponent', () => {
  let component: ModifierfruitComponent;
  let fixture: ComponentFixture<ModifierfruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierfruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
