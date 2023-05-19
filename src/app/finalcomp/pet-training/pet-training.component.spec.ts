import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetTrainingComponent } from './pet-training.component';

describe('PetTrainingComponent', () => {
  let component: PetTrainingComponent;
  let fixture: ComponentFixture<PetTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
