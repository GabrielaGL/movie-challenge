import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login/login.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent },
  { path:'sign-in', component:SignInComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
