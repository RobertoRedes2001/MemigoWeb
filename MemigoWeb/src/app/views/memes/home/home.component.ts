import { Component, inject } from '@angular/core';
import { Meme } from '../../../interfaces/meme.interfaces';
import { MemesService } from '../../../services/memes.service';
import { NgClass } from '@angular/common';
import { PostComponent } from '../../../components/post/post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass,PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  memesServ = inject(MemesService);
  memes : Meme[] = [] 
  theme : string | null = '';

  getMemes(){
    this.memesServ.getMemes().subscribe((response) => {
      this.memes = response;
    });
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme');
    this.getMemes();
  }
}
