import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { MemePostComponent } from './components/Meme/meme-post/meme-post.component';
import { LoginComponent } from './components/forms/login/login.component';
import { MemeMakerComponent } from './components/Meme/meme-maker/meme-maker.component';
import { UserSearchComponent } from './views/user-search/user-search.component';
import { OptionsComponent } from './views/options/options.component';
import { ProfileComponent } from './views/profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: '/memes', pathMatch: 'full' },
    { path :'login', component:LoginComponent },
    { path: 'memes', component: MemePostComponent, canActivate: [authGuard] },
    { path: 'search', component: UserSearchComponent, canActivate: [authGuard] },
    { path: 'creator', component: MemeMakerComponent, canActivate: [authGuard] },
    { path: 'options', component: OptionsComponent, canActivate: [authGuard] },
    { path: 'my-profile', component: ProfileComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] }
];
