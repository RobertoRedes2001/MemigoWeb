import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interfaces';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public service:UsersService){}

  ngOnInit(){
   
  }
}
