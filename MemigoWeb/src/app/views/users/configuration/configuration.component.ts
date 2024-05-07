import { Component } from '@angular/core';
import { GlobalConstants } from '../../../common/global-constants';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [NgClass],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})
export class ConfigurationComponent {
  globalConstants = new GlobalConstants();
  theme : string | null = localStorage.getItem('theme');

  logOut(){

  }

  accountInDecline(){

  }

  toggleTheme() {
    const currentTheme = localStorage.getItem('theme'); 
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    this.theme = localStorage.getItem('theme');
    location.reload();
  }

}
