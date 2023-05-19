import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './finalcomp/home/home.component';
import { PetTypeComponent } from './finalcomp/pet-type/pet-type.component';
import { PetNeedsComponent } from './finalcomp/pet-needs/pet-needs.component';
import { PetTrainingComponent } from './finalcomp/pet-training/pet-training.component';
import { PetMedicationComponent } from './finalcomp/pet-medication/pet-medication.component';
import { KnowYourPetMoreComponent } from './finalcomp/know-your-pet-more/know-your-pet-more.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';



const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'pettype',component: PetTypeComponent},
  {path: 'petneeds',component:  PetNeedsComponent},
  {path: 'pettraining',component: PetTrainingComponent},
  {path: 'medication',component: PetMedicationComponent},
  {path: 'knowyourpetmore',component: KnowYourPetMoreComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
