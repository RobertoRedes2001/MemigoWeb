import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [TranslateModule,NgClass, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>) {}
  theme : string | null = '';

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
  }
}
