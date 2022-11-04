import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public validation_messages = {
    usuario: [
      { type: 'email', message: 'No es un formato de correo.' },
      { type: 'required', message: 'Falta informacion.' },
    ],
    password: [
      { type: 'required', message: 'Falta informacion.' },
    ],
  };
  public myform: FormGroup;
  public errorFormulario=false
  constructor(    public router: Router) {
    this.myform = new FormGroup({
      usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
   }

  ngOnInit(): void {
  }

  validateUser(){
    if(this.myform.valid){
      this.router.navigate(['visa-card-dispenser']);
    }else{
      this.errorFormulario=true
    }
  }

}
