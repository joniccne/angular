import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [{
	path: '',
	data: {
        title: 'หน้าแรก น่ะจ๊ะ',
		urls: [{title: 'หน้า '}]
		
    },
	component: StarterComponent
}];

@NgModule({
	imports: [
    	FormsModule,
    	CommonModule, 
    	RouterModule.forChild(routes)
    ],
	declarations: [StarterComponent],
	providers: [NgbCarouselConfig]
})
export class StarterModule { }