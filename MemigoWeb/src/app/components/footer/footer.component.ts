import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { GlobalConstants } from '../../common/global-constants';

@Component({
  selector: 'memigo-footer',
  standalone: true,
  imports: [ MatIconModule, NgClass ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  globalConstants = new GlobalConstants();

  isLightTheme : boolean = this.globalConstants.isLightTheme;
  
}
