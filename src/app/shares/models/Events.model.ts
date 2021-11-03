export class Event{
    constructor(public id: Number,
        public eventName: String, 
        public eventLink: String, 
        public PhotoFileName: String,
        public StartDate: Date,
        public EndDate: Date){}
}