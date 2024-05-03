import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatSelectModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  roterService = inject(Router);

  loginForm = new FormGroup({
    uid : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login(event:Event){
    event.preventDefault();
    const formValues = this.loginForm.getRawValue();
    console.log("Login:"+ this.loginForm.controls.uid.value)
    this.authService.login({
      uid : formValues.uid ?? '',
      password : formValues.password ?? '',
    }).subscribe(()=>{
      alert("login exitoso")
      this.roterService.navigate(['/'])
    })
  }

}
