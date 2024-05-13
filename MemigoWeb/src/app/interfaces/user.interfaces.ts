import { SafeUrl } from "@angular/platform-browser";

export interface User{
    id : number;
    uid : string;
    username : string;
    email : string;
    userpfp : string;
    creation : Date;
}

export interface UserPost{
    uid : string | null;
    username : string | null;
    email : string | null;
    password : string | null;
    userpfp : string | SafeUrl;
    creationDate : Date;
}

export interface UserUpdate{
    id : number;
    username : string;
    userpfp : string;
}

export interface UserSearch{
    uid : string;
    username : string;
    userpfp : string;
}