export interface Meme{
    id : number;
    userid : number;
    likes : number;
    meme : string;
    description : string;
    post : Date;
}

export interface MemePost{
    userid : number;
    meme : string;
    description : string;
}