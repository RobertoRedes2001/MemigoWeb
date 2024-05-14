import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User, UserSearch } from '../../interfaces/user.interfaces';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'memigo-header',
  standalone: true,
  imports: [
    NgClass,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  service = inject(UsersService);
  routerService = inject(Router);
  theme: string | null = '';
  authService = inject(AuthService);
  profilelink: string = '';
  profilepic: string = '';
  users : UserSearch[] = [];
  usersCtrl = new FormControl('');
  filteredUsers : Observable<UserSearch[]>;

  constructor() {
    this.filteredUsers = this.usersCtrl.valueChanges.pipe(
      startWith(''),
      map(user => (user ? this._filterUsers(user) : this.users.slice())),
    );
  }

  navigateTo(user:string){
    let url : string = user.replace("@","");
    this.usersCtrl.reset();
    this.routerService.navigate(["/", url]);
  }

  getUser(uid: string): void {
    this.service.getByUid(uid).subscribe((response: User) => {
      this.service.setCurrentUser(response);
      this.profilepic = response.userpfp;
      this.profilelink = response.uid.replace(/@/g, '');
    });
  }

  getUsers(){
    this.service.getUsers().subscribe((response) => {
      response.forEach((user)=>{
        let userdata : UserSearch = { uid: user.uid, username: user.username, userpfp: user.userpfp};
        this.users.push(userdata);
      })
    });
  }

  private _filterUsers(value: string): UserSearch[] {
    const filterValue = value.toLowerCase();
    return this.users.filter(user => user.username.toLowerCase().includes(filterValue));
  }
  
  ngOnInit() {
    if (localStorage.getItem('theme') == null) {
      localStorage.setItem('theme', 'light-theme');
    }
    this.getUser(localStorage.getItem('currentUser') ?? '');
    this.getUsers();
    this.theme = localStorage.getItem('theme');
  }
}
