import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage  } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cropper-modal',
  standalone: true,
  imports: [TranslateModule,NgClass,MatDialogModule, MatButtonModule, ImageCropperComponent],
  templateUrl: './cropper-modal.component.html',
  styleUrl: './cropper-modal.component.scss'
})
export class CropperModalComponent {
  
  @Input() imageChangedEvent: Event | null = null;
  @Output() croppedImageCallback = new EventEmitter<SafeUrl>();
  theme : string | null = '';

  constructor(
    public dialogRef: MatDialogRef<CropperModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {
    this.imageChangedEvent = data.imageChangedEvent;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImageCallback.emit(this.sanitizer.bypassSecurityTrustUrl(event.objectUrl??''));
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme') 
  }
}
