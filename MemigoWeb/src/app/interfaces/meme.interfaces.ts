export interface Meme{
    id : number;
    userid : number;
    likes : number;
    meme : string;
    description : string;
    post : Date;
}

export interface MemePost{
    userId : number;
    meme : string;
    postDesc : string;
}