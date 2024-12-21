import { NgModule } from '@angular/core';
import { AddEditEmployeeComponent } from './employee/add-edit-employee/add-edit-employee.component';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';


export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home route
  { path: 'list', loadComponent: () => import('./employee/employee-list/employee-list.component').then(m => m.EmployeeListComponent) },
  { path: 'form', component:EmployeeFormComponent},
  { path: 'form', loadComponent: () => import('./employee/employee-form/employee-form.component').then(m => m.EmployeeFormComponent) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
