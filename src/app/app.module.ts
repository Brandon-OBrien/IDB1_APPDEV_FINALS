import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './finalcomp/home/home.component';
import { NavbarComponent } from './finalcomp/navbar/navbar.component';
import { PetTypeComponent } from './finalcomp/pet-type/pet-type.component';
import { PetNeedsComponent } from './finalcomp/pet-needs/pet-needs.component';
import { PetTrainingComponent } from './finalcomp/pet-training/pet-training.component';
import { PetMedicationComponent } from './finalcomp/pet-medication/pet-medication.component';
import { KnowYourPetMoreComponent } from './finalcomp/know-your-pet-more/know-your-pet-more.component';
import { FooterComponent } from './finalcomp/footer/footer.component';

import { AccountModule } from './Accounts/account.module';

import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule}from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PetTypeComponent,
    PetNeedsComponent,
    PetTrainingComponent,
    PetMedicationComponent,
    KnowYourPetMoreComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccountModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'home',component: HomeComponent}]),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
