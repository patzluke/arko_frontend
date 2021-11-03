export interface article {
    
    id: number,
    title: String, 
    desc: String, 
    content: String,
    PhotoFileName: String; 
    authorName: String;
    dateCreated: Date; 
    viewCount: number;
    editedBy: String;
    is_approved: Boolean;
}