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

import { IndataRoutes } from './inputdata.routing';

import { InputComponent } from './input/input.component';
import { LoginComponent } from './login/login.component';
import { InputdataComponent } from './inputdata.component';
import { UpdataComponent } from './updata/updata.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( IndataRoutes ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [InputComponent, LoginComponent, InputdataComponent, UpdataComponent],
  providers: [DataService]
})
export class InputdataModule { }
