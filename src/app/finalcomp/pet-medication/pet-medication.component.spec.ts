import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMedicationComponent } from './pet-medication.component';

describe('PetMedicationComponent', () => {
  let component: PetMedicationComponent;
  let fixture: ComponentFixture<PetMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetMedicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
