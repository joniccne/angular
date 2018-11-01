import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'electronics', loadChildren: './electronics/electronics.module#ElectronicsModule' },
        { path: 'inputdata', loadChildren: './inputdata/inputdata.module#InputdataModule' },
        { path: 'home', loadChildren: './home/home.module#HomeModule' },

        
    ]
},
{
    path: '**',
    redirectTo: '/home' 
}];


