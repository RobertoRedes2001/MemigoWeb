import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { MemePostComponent } from './components/Meme/meme-post/meme-post.component';
import { LoginComponent } from './components/forms/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: MemePostComponent, canActivate: [authGuard] },
    { path :'login', component:LoginComponent }
];
