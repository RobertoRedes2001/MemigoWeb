import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../../../components/delete-dialog/delete-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [TranslateModule,NgClass,DeleteDialogComponent],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})

export class ConfigurationComponent {

  constructor(private translateService : TranslateService, public service : UsersService,public dialog: MatDialog){}

  theme : string | null = '';
  authService = inject(AuthService);

  logOut(){
    let user : User = { id: 0, uid: '', username: '', email: '', userpfp: '', creation: new Date() };
    this.service.setCurrentUser(user);
    this.authService.logout();
  }

  accountInDecline(){
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(result => {
      if (result == 'Ok') {
        this.service.deleteUser(this.service.getCurrentUser().id).subscribe();
        this.authService.logout();
      }
    });
  }

  toggleTheme() {
    const currentTheme = localStorage.getItem('theme'); 
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    location.reload();
  }

  public toggleLanguage(){
    if(localStorage.getItem('selectedLanguage')!='es'){
      this.translateService.use('es');
      localStorage.setItem('selectedLanguage', 'es');
    }else{
      this.translateService.use('en');
      localStorage.setItem('selectedLanguage', 'en');
    }
    window.location.reload();
  }

  ngOnInit(){
    if(localStorage.getItem('theme')==null){
      localStorage.setItem('theme','light-theme');
    }
    this.theme = localStorage.getItem('theme');
  }

}
