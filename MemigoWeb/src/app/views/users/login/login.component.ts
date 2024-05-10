import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../../components/login-dialog/login-dialog.component';
import { NgClass } from '@angular/common';
import { GlobalConstants } from '../../../common/global-constants';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatSelectModule,LoginDialogComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  routerService = inject(Router);
  theme : string | null = '';
  global = new GlobalConstants();

  constructor(public dialog: MatDialog) {}

  loginForm = new FormGroup({
    uid : new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login(event:Event){
    event.preventDefault();
    const formValues = this.loginForm.getRawValue();
    this.authService.login({
      uid: formValues.uid ?? '',
      password: formValues.password ?? ''
    })
      .subscribe({
        next: () => {
          this.authService.setCurrentUser();
          this.global.url = "/home";
          this.routerService.navigate(['/home']);
        },
        error: (error) => {
          this.dialog.open(LoginDialogComponent, {
            data: { dialog_header: "Error de Inicio de sesion",
              dialog_body: "Contraseña o nombre de usuario incorrectos.",
              dialog_button:"Cerrar"
             } 
          });
        }
      });
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
    
  }
}
