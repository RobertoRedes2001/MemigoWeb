import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../interfaces/user.interfaces';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'memigo-header',
  standalone: true,
  imports: [ NgClass, MatIconModule, RouterLink, RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  theme : string | null = '';
  authService = inject(AuthService);
  profilelink: string = '';  
  profilepic : string = '';

  constructor(public service: UsersService) {}

  getUser(uid: string): void {
    this.service.getByUid(uid).subscribe(
      (response: User) => {
        this.service.setCurrentUser(response);
        this.profilepic = response.userpfp;
        this.profilelink = response.uid.replace(/@/g, '');
      }
    );
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.getUser(localStorage.getItem('currentUser')??'');
    this.theme = localStorage.getItem('theme');
  }

}
