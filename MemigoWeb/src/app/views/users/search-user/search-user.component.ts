import { Component, inject } from '@angular/core';
import { SearchResultComponent } from '../../../components/search-result/search-result.component';
import { UsersService } from '../../../services/users.service';
import { UserSearch } from '../../../interfaces/user.interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [SearchResultComponent, NgClass],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent {

  service = inject(UsersService);
  user : UserSearch = {uid:"",username:"",userpfp:""};
  theme : string | null = '';

  getUsers() : void{
    this.service.getById(1).subscribe((response) => {
      this.user.uid = response.uid;
      this.user.username = response.username;
      this.user.userpfp = response.userpfp;
    })
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme');
    this.getUsers();
  }

}
