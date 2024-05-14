import { Component, ElementRef, inject } from '@angular/core';
import { MemesService } from '../../../services/memes.service';
import { Meme } from '../../../interfaces/meme.interfaces';
import { User, UserUpdate } from '../../../interfaces/user.interfaces';
import { UsersService } from '../../../services/users.service';
import { Router, NavigationEnd } from '@angular/router';
import { PostComponent } from '../../../components/post/post.component';
import { NgClass, NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from '../../../components/edit-profile/edit-profile.component';
import html2canvas from 'html2canvas';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [PostComponent, NgClass, NgStyle, EditProfileComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  memesServ = inject(MemesService);
  userServ = inject(UsersService);
  router = inject(Router);

  constructor(public dialog: MatDialog, private elementRef: ElementRef) {}

  memes: Meme[] = [];
  theme: string | null = '';
  user: User = {
    id: 0,
    uid: '',
    username: '',
    email: '',
    userpfp: '',
    creation: new Date(),
  };
  src: string | SafeUrl = '';
  likes: number = 0;
  posts: number = 0;
  isMyUser: boolean = false;
  updateProfile: boolean = false;
  update: UserUpdate = { id: 0, username: '', userpfp: '' };

  getUser() {
    let uid: string = this.router.url.replace('/', '@');
    this.userServ.getByUid(uid).subscribe((response) => {
      this.user = response;
      this.src = response.userpfp;
      this.checkUser(this.user.uid);
      this.getMemes(this.user.id);
    });
  }

  updateUser(user: UserUpdate) {
    this.userServ.updateUser(user).subscribe();
  }

  getMemes(id: number) {
    this.memesServ.getByUser(id).subscribe((response) => {
      this.memes = response;
      this.calculateLikesAndPosts();
    });
  }

  async editProfile() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: { user: { name: this.user.username, img: this.user.userpfp } },
    });

    try {
      dialogRef.componentInstance.updateUser.subscribe(
        (updateUser: UserUpdate) => {
          this.update.id = updateUser.id;
          this.update.username = updateUser.username;
          this.src = updateUser.userpfp; // Cambio aquí para asegurarse de que se actualiza la imagen
        }
      );

      dialogRef.afterClosed().subscribe(async (result: boolean) => {
        if (result == true) {
          // Llamada a getPictureInfo para obtener la información de la imagen
          await this.getPictureInfo();
          // Llamada a updateUser con la información actualizada de la imagen
          this.updateUser(this.update);
          window.location.reload();
        } else {
          this.update = { id: 0, username: '', userpfp: '' };
        }
      });
    } catch (error) {
      // Manejo de errores aquí si es necesario
    }
  }

  async getPictureInfo(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const container = this.elementRef.nativeElement.querySelector('#profile');
      html2canvas(container)
        .then((canvas) => {
          // Actualiza this.update.userpfp con la URL de la imagen
          this.update.userpfp = canvas.toDataURL('image/png');
          resolve(); // Resuelve la promesa cuando la tarea está completa
        })
        .catch((error) => {
          reject(error); // Rechaza la promesa si hay un error
        });
    });
  }

  calculateLikesAndPosts() {
    this.posts = this.memes.length;
    this.likes = 0;
    this.memes.forEach((meme) => {
      this.likes += meme.likes;
    });
  }

  checkUser(uid: string) {
    console.log(uid + ' ' + this.userServ.getCurrentUser().uid);
    if (uid == this.userServ.getCurrentUser().uid) {
      this.isMyUser = true;
    } else {
      this.isMyUser = false;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 'light-theme');
    }
    this.theme = localStorage.getItem('theme');

    this.getUser();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getUser();
      }
    });
  }
}
