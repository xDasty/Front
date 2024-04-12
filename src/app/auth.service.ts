import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  formulario: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  
  token: string = '';

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  onSubmit() {
    
    if(this.formulario.value.email === '' || this.formulario.value.password === ''){
      this._snackBar.open('Necesitas introducir un correo y contraseña válidos');
    }
    
    if (this.formulario.valid) {
      const payload = {
        email: this.formulario.value.email,
        password: this.formulario.value.password
      };

      this.http.post<any>('https://test.bracelit.es/api/v1/login', payload)
        .subscribe(
          (response) => {
            console.log(response);
            this.token = response.token;
            this.router.navigate(['/main']);
            this._snackBar.dismiss();
          },
          (error) => {
            console.error(error);
            this._snackBar.open('Email o password incorrectos')
          }
        );
    }
  }
  isAuth(){
    if (this.token !== '' && this.token !== null){
      return true
    }else{
      return false
    }
  }
}
