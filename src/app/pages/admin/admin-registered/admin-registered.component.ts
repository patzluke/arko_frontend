import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ShowroomService } from 'src/app/shares/services/Showroom.service';
import { ArchivingService } from 'src/app/shares/services/Archiving.service';
import { DatePipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { registrantint } from 'src/app/shares/models/registrantint.mode';
import { textChangeRangeIsUnchanged } from 'typescript';


@Component({
  selector: 'app-admin-registered',
  templateUrl: './admin-registered.component.html',
  styleUrls: ['./admin-registered.component.css']
})
export class AdminRegisteredComponent implements OnInit {
  @ViewChild('userTable') userTable: ElementRef;

  constructor(private shService: ShowroomService, private archService: ArchivingService, public datepipe: DatePipe) {}
  registrant: registrantint[] = []; 
  arrayTest: registrantint[] = [];
  p: number = 1;
  id: number;

  ngOnInit(): void {
    this.showRegistrants();
  
  
    
    }
  is_superuser : Boolean;
  title: String = "Registrants of "
  dateToday = new Date();
  latest: String = this.datepipe.transform(this.dateToday, 'yyyy');
  finalTitle :string = this.title + " " + this.latest;
  i : number;
  registrantLength: number;
  
  showRegistrants(){
    this.shService.GET_registrants().subscribe(data=>{
    this.registrant = data.reverse();
    for(var i = 0; i <= this.registrant.length; i++){
      if(this.registrant[i].is_author == false && this.registrant[i].is_superuser==false){
        console.log(this.registrant[i]);
        this.arrayTest.push(this.registrant[i]);
      }
    }
    });
  }
  exportElmToExcel(registrant): void {
    console.log(this.registrantLength)
    if(confirm('Are you sure??')){
    this.archService.exportAsExcelFile(this.arrayTest, this.finalTitle);
    this.archiveRegistrants(registrant);
    
  }
}
archiveRegistrants(registrant){
  this.shService.GET_registrants().subscribe(data=>{
    this.registrant = data.reverse();
    for(var i = 0; i <= this.registrant.length; i++){
      if(this.registrant[i].is_author == false && this.registrant[i].is_superuser==false){
        this.shService.DELETE_registrants(this.registrant[i].id).subscribe(data=>{
        })
      }
    }
 
    });
}

}