import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'

  },
  {
    path: 'main',
    component: MainPageComponent,
    //canActivate: [AuthGuard]
    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
