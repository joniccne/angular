import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes ,RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonpModule } from '@angular/http';

import { HomeComponent } from './home.component';




const routes: Routes = [{
	path: '',
	data: {
        title: 'หน้าแรก ',
		urls: [{title: 'หน้าแรก '}]
		
    },
	component: HomeComponent
}];


@NgModule({
  imports: [
    FormsModule,
    CommonModule, 
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [HomeComponent]
  
})
export class HomeModule { }
