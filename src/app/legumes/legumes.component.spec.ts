import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesComponent } from './legumes.component';

describe('LegumesComponent', () => {
  let component: LegumesComponent;
  let fixture: ComponentFixture<LegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegumesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
