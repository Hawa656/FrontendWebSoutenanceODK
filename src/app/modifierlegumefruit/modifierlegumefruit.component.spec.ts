import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierlegumefruitComponent } from './modifierlegumefruit.component';

describe('ModifierlegumefruitComponent', () => {
  let component: ModifierlegumefruitComponent;
  let fixture: ComponentFixture<ModifierlegumefruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierlegumefruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierlegumefruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
