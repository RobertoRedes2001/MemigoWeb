import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { GlobalConstants } from '../../common/global-constants';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'memigo-header',
  standalone: true,
  imports: [ NgClass, MatIconModule, RouterLink, RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  globalConstants = new GlobalConstants();

  isLightTheme : boolean = this.globalConstants.isLightTheme;
}
