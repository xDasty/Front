import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';

import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { MatDrawerContainer, MatDrawerContent, MatDrawer } from '@angular/material/sidenav'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'

import { AutoFocusDirective } from './main-page/auto-focus.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    AutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDrawerContainer,
    MatDrawerContent, 
    MatDrawer,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIcon,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
