import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [NgClass, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  theme : string | null = '';

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any){}

  @Input() dialog_header: string = ''; 
  @Input() dialog_body: string = ''; 
  @Input() dialog_button: string = '';  

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
    this.dialog_header = this.data.dialog_header;
    this.dialog_body = this.data.dialog_body;
    this.dialog_button = this.data.dialog_button;
  }
}
