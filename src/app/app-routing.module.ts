import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ClientItineraryComponent} from './client-itinerary/client-itinerary.component';
import {ViewClientComponent} from './view-client/view-client.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';

export const RouterTable: Routes = [
  {path : '', 
  component : ClientItineraryComponent},
  {
    path:'clientItinerary',
    component:ClientItineraryComponent
  },
  {
    path :'viewCient' , 
    component : ViewClientComponent
  },
  {
    path :'**' , 
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule, CommonModule,ReactiveFormsModule],
  declarations :[HomeComponent, ClientItineraryComponent, ViewClientComponent,NotFoundComponent],
  exports: [HomeComponent, ClientItineraryComponent, ViewClientComponent,NotFoundComponent]
})
export class AppRoutingModule { }
