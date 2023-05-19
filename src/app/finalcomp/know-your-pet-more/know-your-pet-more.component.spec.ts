import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourPetMoreComponent } from './know-your-pet-more.component';

describe('KnowYourPetMoreComponent', () => {
  let component: KnowYourPetMoreComponent;
  let fixture: ComponentFixture<KnowYourPetMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourPetMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowYourPetMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
