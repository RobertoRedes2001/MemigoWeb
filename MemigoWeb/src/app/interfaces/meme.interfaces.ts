export interface Meme{
    id : number;
    likes : number;
    meme : string;
    postDesc : string;
    post : Date;
    userId : number;
}

export interface MemePost{
    userId : number;
    meme : string;
    postDesc : string;
}