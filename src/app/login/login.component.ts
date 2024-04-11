import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  
})
export class LoginComponent {
  
  formulario: FormGroup = new FormGroup({});
  token: string = ''
  
  

  constructor(
    private fb: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    if(this.formulario.value.email === '' || this.formulario.value.password === ''){
      this._snackBar.open('Necesitas introducir un correo y contraseña válidos')
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
          this.token = response.token
          this.router.navigate(['/main'])
          this._snackBar.dismiss()
         },
        (error) => {
           console.error(error);
         }
       );
   


    }
  }

}










