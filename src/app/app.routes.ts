import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { RegisterComponent } from './auth/register/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tasks', component: TaskListComponent }
];

export const routing = RouterModule.forRoot(routes);