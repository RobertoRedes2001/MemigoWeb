import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'memigo-footer',
  standalone: true,
  imports: [ MatIconModule, NgClass ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  theme : string | null = localStorage.getItem('theme');

}
