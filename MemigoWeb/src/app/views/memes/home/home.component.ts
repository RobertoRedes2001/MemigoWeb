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

  getMemes(){
    this.memesServ.getMemes().subscribe((response) => {
      this.memes = response;
    });
  }

  ngOnInit(){
    this.getMemes();
  }
}
