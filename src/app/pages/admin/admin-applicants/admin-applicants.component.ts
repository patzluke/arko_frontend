import { Component, ElementRef, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { FormService } from 'src/app/shares/services/Form.service';
import { ArchivingService } from 'src/app/shares/services/Archiving.service';
import { DatePipe } from '@angular/common';
import { applicant } from 'src/app/shares/models/applicant.mode';
import {MatDialog} from '@angular/material/dialog';
import { StringLiteralLike } from 'typescript';

@Component({
  selector: 'app-admin-applicants',
  templateUrl: './admin-applicants.component.html',
  styleUrls: ['./admin-applicants.component.css']
})
export class AdminApplicantsComponent implements OnInit {

  constructor(private fService: FormService,
    private arService: ArchivingService, 
    public datepipe: DatePipe,
     public dialog: MatDialog) { }
@ViewChild('userTable') userTable: ElementRef;
  ngOnInit(): void {
    this.showApplicants();

  }
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  p: number = 1;
  applicants: applicant[] = [];
  id: number;
  title: String = "List of Applicants Year:"
  dateToday = new Date();
  latest: String = this.datepipe.transform(this.dateToday, 'yyyy');
  finalTitle :string = this.title + " " + this.latest;


  showApplicants(){
    this.fService.GET_members().subscribe((data=>{
      this.applicants = data;
      this.applicants.reverse();
    }))
  }

  exportElmToExcel(applicant): void {
    
    if(confirm('Are you sure??')){
    this.arService.exportAsExcelFile(this.applicants, this.finalTitle);
    this.archiveApplicants(applicant);
    }
  }
  
  archiveApplicants(applicant){
    for(let i = 0 ; i <= this.applicants.length; i++){
      this.applicants[i];
        this.fService.DELETE_member(this.applicants[i].id).subscribe(data=>{ 
  })
  
  }
}

year:String;
section: String;
sex: String;
birthDate: Date;
age: number;
membershipStatus: String;
contact: number;
address: String;
facebookLink: String;
lookingForward: String;
typeOfEvents: String;
topicsIntrested: String
openDialog(id: Number) {
  this.fService.GET_member(id).subscribe((data=>{
    this.year = data.year;
    this.section = data.section;
    this.sex = data.sex;
    this.birthDate = data.birthDate;
    this.age = data.age;
    this.membershipStatus = data.membershipStatus;
    this.contact = data.contact;
    this.address = data.address;
    this.facebookLink = data.facebookLink;
    this.lookingForward = data.lookingForward;
    this.typeOfEvents = data.typeOfEvents;
    this.topicsIntrested = data.topicsIntrested
  }))
  let dialogRef = this.dialog.open(this.callAPIDialog,{
    width: '400px',

  });
  dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
          if (result !== 'no') {
            const enabled = "Y"
              console.log(result);
          } else if (result === 'no') {
             console.log('User clicked no.');
          }
      }
  })
}

}
