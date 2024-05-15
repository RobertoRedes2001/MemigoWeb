import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-meme-dialog',
  standalone: true,
  imports: [TranslateModule,NgClass, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './meme-dialog.component.html',
  styleUrl: './meme-dialog.component.scss'
})
export class MemeDialogComponent {
  theme : string | null = '';

  constructor(public dialogRef: MatDialogRef<MemeDialogComponent>){}

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
  }
}
