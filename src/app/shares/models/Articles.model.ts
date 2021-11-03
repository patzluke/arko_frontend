export class Article{
    constructor(public id: number,
        public title: String, 
        public desc: String, 
        public content: String, 
        public PhotoFileName: String, 
        public authorName: String, 
        public dateCreated: Date,
        public viewCount: number,
        public editedBy: String,
        public is_approved: Boolean){}
}