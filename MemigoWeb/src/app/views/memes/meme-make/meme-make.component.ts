import { Component, ElementRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import { CropperModalComponent } from '../../../components/cropper-modal/cropper-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MemesService } from '../../../services/memes.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatInputModule } from '@angular/material/input';
import { TemplatesService } from '../../../services/templates.service';
import { Template } from '../../../interfaces/templates.interfaces';

@Component({
  selector: 'app-meme-make',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './meme-make.component.html',
  styleUrl: './meme-make.component.scss'
})
export class MemeMakeComponent {

  text1: string = '';
  text2: string = '';
  imageSrc: SafeUrl | string = '';
  theme : string | null = '';
  source : SafeUrl | string = '';
  templates : Template[] = [];
  constructor(public dialog: MatDialog,public service: MemesService,public templatesServ: TemplatesService,private elementRef: ElementRef) {}

  getTemplates() : void{
    this.templatesServ.getTemplates().subscribe((response) => {
      this.templates = response;
      console.log(this.templates)
      this.imageSrc = this.templates[0].template;
    })
  }

  updateTextUp(event: any) {
    this.text1 = event.target.value;
  }

  updateTextDown(event: any) {
    this.text2 = event.target.value;
  }

  downloadMeme() {
    const container = this.elementRef.nativeElement.querySelector('.contenedor-imagen');
    html2canvas(container).then(canvas => {
       // Convertir el canvas en una imagen
       const image = canvas.toDataURL('image/png');
       // Crear un enlace de descarga para la imagen generada
       const link = document.createElement('a');
       link.download = 'mimemingo.png';
       link.href = image;
       link.click();
     });
   } 

   fileChangeEvent(event: Event): void {
    const dialogRef = this.dialog.open(CropperModalComponent, {
      data: { imageChangedEvent: event } // Pasar datos al modal
    });

    dialogRef.componentInstance.croppedImageCallback.subscribe((croppedImageUrl: ImageCroppedEvent) => {
      this.source = croppedImageUrl;
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result==true) {
        this.imageSrc = this.source;
      }else{
        const fileInput = event.target as HTMLInputElement;
        fileInput.value='';
      }
    });
  }

  async getPictureInfo(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const container = this.elementRef.nativeElement.querySelector('#profile');
        html2canvas(container).then(canvas => {
            this.source = canvas.toDataURL('image/png');
            resolve(); // Resuelve la promesa cuando la tarea está completa
        }).catch(error => {
            reject(error); // Rechaza la promesa si hay un error
        });
    });
  }

  ngOnInit(){
    this.getTemplates();

  }
}
