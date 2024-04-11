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
    this.formulario = this.fb.group({ //Defino la estructura del formulario
      email: ['', Validators.required], 
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    
    //Abrir snackbar si no hay email/password
    if(this.formulario.value.email === '' || this.formulario.value.password === ''){
      this._snackBar.open('Necesitas introducir un correo y contraseña válidos')
    }
    
    if (this.formulario.valid) {  //Si el formulario tiene email y pass, creo el payload
      const payload = {
        email: this.formulario.value.email,
        password: this.formulario.value.password
      };

    this.http.post<any>('https://test.bracelit.es/api/v1/login', payload) //POST con la ruta de la api y el objeto payload con datos formulario
      .subscribe(
        (response) => {
          console.log(response);
          this.token = response.token //Almaceno el token 
          this._snackBar.dismiss()
          if(this.token !== null || ''){  //Si el POST devuelve token routea a /main
            this.router.navigate(['/main'])
          }else{
            alert('Ocurrió un fallo en la autenticación')
          }
         },
        (error) => { //Si no hay respuesta al hacer el POST imprime en consola el error
           console.error(error);
         }
       );
   


    }
  }

}










