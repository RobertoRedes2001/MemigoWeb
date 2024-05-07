import { Component, inject, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authService = inject(AuthService);
  title = 'MemigoWeb';
  currentRoute : string = '';
  theme : string | null = localStorage.getItem('theme');

  constructor(private router: Router, private elementRef: ElementRef, private renderer: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngAfterViewChecked() {
    if (this.theme=='light-theme') {
      this.renderer.addClass(this.elementRef.nativeElement.ownerDocument.body, 'light-theme');
      this.renderer.removeClass(this.elementRef.nativeElement.ownerDocument.body, 'dark-theme');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement.ownerDocument.body, 'dark-theme');
      this.renderer.removeClass(this.elementRef.nativeElement.ownerDocument.body, 'light-theme');
     }
  }

}
