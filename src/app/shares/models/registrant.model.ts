export class Registrant{
    constructor(public id: Number,
        public firstname: String, 
        public lastname: String, 
        public email: String, 
        public ticket: String,
        public is_showroomRegistrant: Boolean,
        public is_superuser: Boolean,
        public is_author: Boolean){}
}