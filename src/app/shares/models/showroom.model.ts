export class showroom{
    constructor(
        public id: Number,
        public PhotoFileName: String,
        public Title: String,  
        public Description: String,
        public AuthorName: String,
        public viewCount: number,
        public StartDate: Date,
        public EndDate: Date,
        public category: String
        ){}
}