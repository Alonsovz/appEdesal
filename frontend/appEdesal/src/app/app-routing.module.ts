import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'login', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'login' },
  {path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
