import { Component, Input, inject } from '@angular/core';
import { UserSearch } from '../../interfaces/user.interfaces';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [NgClass],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.scss'
})
export class SearchResultComponent {

    @Input() user : UserSearch = {uid:"",username:"",userpfp:""};
    theme : string | null = '';
    routerService = inject(Router);
    
    navigateTo(){
      let url : string = this.user.uid.replace("@","");
      this.routerService.navigate(["/", url]);
    }

    ngOnInit(){
      if(localStorage.getItem('theme')==null){
        localStorage.setItem('theme','light-theme');
      }
      this.theme = localStorage.getItem('theme');
    }
}
