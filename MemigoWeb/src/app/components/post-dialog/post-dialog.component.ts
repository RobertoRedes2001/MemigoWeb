import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, 
  MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NgClass } from '@angular/common';
import { FormControl ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-dialog',
  standalone: true,
  imports: [NgClass,MatInputModule,MatDialogActions,MatDialogContent,MatDialogClose,ReactiveFormsModule],
  templateUrl: './post-dialog.component.html',
  styleUrl: './post-dialog.component.scss'
})
export class PostDialogComponent {

  theme : string | null = '';
  constructor(public dialogRef: MatDialogRef<PostDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any){}
  @Output() message = new EventEmitter<string>(); 
  postForm: FormControl = new FormControl('');

  postMeme() : void{
    this.message.emit(this.postForm.value);
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
  }
}
