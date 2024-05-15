import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [TranslateModule,NgClass, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  theme : string | null = '';

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>){}

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
  }
}
