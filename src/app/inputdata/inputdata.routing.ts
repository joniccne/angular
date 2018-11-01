import { Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { UpdataComponent } from './updata/updata.component';

export const IndataRoutes: Routes =[
    // {
    //     path: '',
    //     children: [
    //       {path: 'input', component: InputComponent, data: {title: 'Input',urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Input'}]}}
    //     ]
    //   }
    {path: 'input', component: InputComponent,canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'updata', component: UpdataComponent}

]