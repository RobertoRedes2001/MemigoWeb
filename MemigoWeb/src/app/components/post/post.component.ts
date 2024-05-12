import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Meme } from '../../interfaces/meme.interfaces';
import { MemesService } from '../../services/memes.service';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [NgClass],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  constructor(private elementRef: ElementRef) {}

  
  memesServ = inject(MemesService);
  userServ = inject(UsersService);
  routerService = inject(Router);
  @Input() post : Meme = { id: 0, userId: 0, likes: 0, meme: "", postDesc: "", post: new Date() };  
  userdata : {uid:string, username:string} = {uid:"", username:""};
  theme : string | null = '';
  liked : boolean = false;

  like(){
    this.memesServ.setLike(this.post.id).subscribe();
  }

  dislike(){
    this.memesServ.setDislike(this.post.id).subscribe();
  }

  likePost(){
    if(this.liked){
      this.dislike();
      this.liked = false;
    }else{
      this.like();
      this.liked = true;
    }
  }

  getUser(){
    console.log(this.post)
    this.userServ.getById(this.post.userId).subscribe((response) => {
      this.userdata.uid = response.uid;
      this.userdata.username = response.username;
    })
  }

  navigateToUser(){
    let url : string = this.userdata.uid.replace("@","");
    this.routerService.navigate(["/", url]);
  }

  downloadMeme() {
    const container = this.elementRef.nativeElement.querySelector('.meme');
    html2canvas(container).then(canvas => {
       const image = canvas.toDataURL('image/png');
       const link = document.createElement('a');
       link.download = 'mimemingo.png';
       link.href = image;
       link.click();
     });
   }

   ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme');
    this.getUser();
   }

}
