import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetNeedsComponent } from './pet-needs.component';

describe('PetNeedsComponent', () => {
  let component: PetNeedsComponent;
  let fixture: ComponentFixture<PetNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
