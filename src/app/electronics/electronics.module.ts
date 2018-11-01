import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DataService } from '../services/data.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ElectronicsRoutes } from './electronics.routing';

import { AirComponent } from './air/air.component';
import { RefrigeratorComponent } from './refrigerator/refrigerator.component';
import { WashComponent } from './wash/wash.component';
import { FanComponent } from './fan/fan.component';
import { VacuumComponent } from './vacuum/vacuum.component';
import { SuctionComponent } from './suction/suction.component';
import { IronComponent } from './iron/iron.component';
import { WaterHeaterComponent } from './water-heater/water-heater.component';
import { MicrowaveComponent } from './microwave/microwave.component';
import { CookingComponent } from './cooking/cooking.component';
import { KitchenAppliancesComponent } from './kitchen-appliances/kitchen-appliances.component';
import { OneDoorRefrigeratorsComponent } from './refrigerator/one-door-refrigerators/one-door-refrigerators.component';
import { TwoDoorRefrigeratorsComponent } from './refrigerator/two-door-refrigerators/two-door-refrigerators.component';
import { WashingmachinesComponent } from './wash/washingmachines/washingmachines.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ElectronicsRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [AirComponent, RefrigeratorComponent, WashComponent, FanComponent, VacuumComponent, SuctionComponent, IronComponent, WaterHeaterComponent, MicrowaveComponent, CookingComponent, KitchenAppliancesComponent, OneDoorRefrigeratorsComponent, TwoDoorRefrigeratorsComponent, WashingmachinesComponent],

  providers: [DataService]
})
export class ElectronicsModule { }
