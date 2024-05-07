import { Routes } from '@angular/router';
import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import { HomeComponent } from './views/memes/home/home.component';
import { authGuard } from './guard/auth.guard';
import { MemeMakeComponent } from './views/memes/meme-make/meme-make.component';
import { SearchUserComponent } from './views/users/search-user/search-user.component';
import { ConfigurationComponent } from './views/users/configuration/configuration.component';
import { ProfileComponent } from './views/users/profile/profile.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path :'login', component:LoginComponent },
    { path :'register', component:RegisterComponent },
    { path :'home', component: HomeComponent, canActivate: [authGuard] },
    { path :'maker', component: MemeMakeComponent, canActivate: [authGuard] },
    { path :'search', component: SearchUserComponent, canActivate: [authGuard] },
    { path :'settings', component: ConfigurationComponent, canActivate: [authGuard] },
    { path :':username', component: ProfileComponent, canActivate: [authGuard] },
];
