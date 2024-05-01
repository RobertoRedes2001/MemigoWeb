export interface User{
    id : number;
    uid : string;
    username : string;
    email : string;
    userpfp : string;
    creation : Date;
}

export interface UserPost{
    uid : string;
    username : string;
    email : string;
    password : string;
    userpfp : string;
    creation : Date;
}

export interface UserLogin{
    id : number;
    uid : string;
    email : string;
    password : string;
}

export interface UserUpdate{
    id : number;
    username : string;
    userpfp : string;
}