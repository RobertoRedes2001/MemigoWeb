import { Component, ElementRef, inject } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import html2canvas from 'html2canvas';
import { CropperModalComponent } from '../../../components/cropper-modal/cropper-modal.component';
import { PostDialogComponent } from '../../../components/post-dialog/post-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MemesService } from '../../../services/memes.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatInputModule } from '@angular/material/input';
import { TemplatesService } from '../../../services/templates.service';
import { Template } from '../../../interfaces/templates.interfaces';
import { MemePost } from '../../../interfaces/meme.interfaces';
import { LoginDialogComponent } from '../../../components/login-dialog/login-dialog.component';
import { UsersService } from '../../../services/users.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-meme-make',
  standalone: true,
  imports: [MatInputModule,NgClass],
  templateUrl: './meme-make.component.html',
  styleUrl: './meme-make.component.scss'
})
export class MemeMakeComponent {

  userServ = inject(UsersService);
  memesServ = inject(MemesService);
  templatesServ = inject(TemplatesService);

  text1: string = '';
  text2: string = '';
  textpost : string = '';
  imageSrc: SafeUrl | string = '';
  theme : string | null = '';
  source : string = '';
  templates : Template[] = [];
  constructor(public dialog: MatDialog, private elementRef: ElementRef) {}

  getTemplates() : void{
    this.templatesServ.getTemplates().subscribe((response) => {
      this.templates = response;
      this.imageSrc = this.templates[0].template;
    })
  }

  postMeme(meme:MemePost){
    this.memesServ.addMeme(meme).subscribe();
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
       const image = canvas.toDataURL('image/png');
       const link = document.createElement('a');
       link.download = 'mimemingo.png';
       link.href = image;
       link.click();
     });
   } 

   fileChangeEvent(event: Event): void {

    let src : string | SafeUrl = '';

    const dialogRef = this.dialog.open(CropperModalComponent, {
      data: { imageChangedEvent: event } 
    });

    dialogRef.componentInstance.croppedImageCallback.subscribe((croppedImageUrl: ImageCroppedEvent) => {
      src = croppedImageUrl;
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result==true) {
        this.imageSrc = src;
      }else{
        const fileInput = event.target as HTMLInputElement;
        fileInput.value='';
      }
    });
  }

  async getPictureInfo(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const container = this.elementRef.nativeElement.querySelector('#meme');
        html2canvas(container).then(canvas => {
            this.source = canvas.toDataURL('image/png');
            resolve(); // Resuelve la promesa cuando la tarea está completa
        }).catch(error => {
            reject(error); // Rechaza la promesa si hay un error
        });
    });
  }

  pickTemplate(src:string){
    this.imageSrc = src;
  }

  async afterDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent);
    try {
      // Espera a que se complete la obtención de la información de la imagen
      await this.getPictureInfo();
      
      dialogRef.componentInstance.message.subscribe((message: string) => {
        this.textpost = message;
      });
  
      dialogRef.afterClosed().subscribe(async (result: boolean) => {
        if (result == true) {
          this.publishPost();
          await this.dialog.open(LoginDialogComponent, {
            data: { 
              dialog_header: "Publicacion exitosa",
              dialog_body: "Meme publicado de forma exitosa en la aplicacion.",
              dialog_button: "Ok"
            } 
          }).afterClosed(); // Espera a que se cierre el diálogo de login
        } else {
          this.textpost = '';
        }
      });
    } catch (error) {
      console.error("Error al obtener información de la imagen:", error);
      // Manejar el error aquí según sea necesario
    }
  }
  

  publishPost(){
    const meme : MemePost = {
      userId : this.userServ.getCurrentUser().id,
      meme : this.source,
      postDesc : this.textpost
    }
    console.log(meme);
    this.postMeme(meme);
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme');
    this.getTemplates();
  }
   
}
