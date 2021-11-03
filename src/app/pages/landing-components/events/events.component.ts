import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { eventint } from '../../../shares/models/eventsint.model';
import { merch } from '../../../shares/models/merchint.model';
import { EventService } from 'src/app/shares/services/Events.service';
import { Events } from '@tinymce/tinymce-angular/editor/Events';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common'
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:4500,
    dots: false,
    navSpeed: 700,
    navText: ["<i class='fa fa-arrow-left' aria-hidden='true'></i>","<i class='fa fa-arrow-right' aria-hidden='true'></i>"],
    responsive: {
      0: {
        items: 1
      }
    },

  }


  events: eventint[] = [];

  event1: eventint;
  event2: eventint;
  event3: eventint;
  event4: eventint;
  event5: eventint;
  event6: eventint;
  event7: eventint;

 

 

  merchs: merch[] = [];

  eventName: String;
  eventLink: String;
  urlofunderconstruction: String 
  imgurl: String = "https://cdn.britannica.com/22/127022-004-DDEB9FD1/Apartment-buildings-construction-Cambridge-Eng.jpg";
  id: Number;
  mname: String;
  price: Number;
  desc: String;
  PhotoFilePath: String;
  PhotoFileName: String;

  constructor(private Mservice: MerchService, private eService: EventService,
    public datepipe: DatePipe,
    public dialog: MatDialog) { }
  imageURL = this.Mservice.PhotoUrl;
  imageURLz = this.eService.PhotoUrl;

  ngOnInit(): void {
    this.showMerchs();
    this.showEvents();
    console.log(this.imageURLz+this.event1.PhotoFileName);
    
  }
  startDate: Date;
  endDate: Date;
  showMerchs(){
    this.Mservice.GET_merchsReadOnly().subscribe(data=>{
      this.merchs=data;
      this.merchs.reverse();
    });
  }
  startevent1;
  endevent1;
  todayDate;

  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  @ViewChild('callAPIDialog2') callAPIDialog2: TemplateRef<any>;
  @ViewChild('callAPIDialog3') callAPIDialog3: TemplateRef<any>;
  @ViewChild('callAPIDialog4') callAPIDialog4: TemplateRef<any>;
  @ViewChild('callAPIDialog5') callAPIDialog5: TemplateRef<any>;
  @ViewChild('callAPIDialog6') callAPIDialog6: TemplateRef<any>;
  @ViewChild('callAPIDialog7') callAPIDialog7: TemplateRef<any>;
  @ViewChild('construct') construct: TemplateRef<any>;
  @ViewChild('construct2') construct2: TemplateRef<any>;

  todaysDate: Date = new Date();
  checkImage: boolean  = true;
  checkImage2: boolean  = true;
  checkImage3: boolean  = true;
  checkImage4: boolean  = true;
  checkImage5: boolean  = true;
  checkImage6: boolean  = true;
  checkImage7: boolean  = true;
  link:String;
  showEvents(){
   
    this.eService.GET_eventsReadOnly().subscribe(data=>{
    this.events = data;
    this.event1 = this.events[0];
    this.event2 = this.events[1];
    this.event3 = this.events[2];
    this.event4 = this.events[3];
    this.event5 = this.events[4];
    this.event6 = this.events[5];
    this.event7 = this.events[6];
    this.link = this.event1.eventLink
    
    if(this.event1 == undefined || this.event1 == null){
      this.checkImage  = false;
    }
    if(this.event2 == undefined || this.event2 == null){
      this.checkImage2  = false;
    }
    })
  }

  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog,{
      width: '600px',
      height: '600px'
  
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

  openDialog2() {
    let dialogRef = this.dialog.open(this.callAPIDialog2,{
      width: '600px',
      height: '600px'
  
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

  openDialog3() {
    let dialogRef = this.dialog.open(this.callAPIDialog3,{
      width: '600px',
      height: '600px'
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

  openDialog4() {
    let dialogRef = this.dialog.open(this.callAPIDialog4,{
      width: '600px',
      height: '600px'
  
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

  openDialog5() {
    let dialogRef = this.dialog.open(this.callAPIDialog5,{
      width: '600px',
      height: '600px'
  
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

  openDialog6() {
    let dialogRef = this.dialog.open(this.callAPIDialog6,{
      width: '600px',
      height: '600px'
  
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

  openDialog7() {
    let dialogRef = this.dialog.open(this.callAPIDialog7,{
      width: '600px',
      height: '600px'
  
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
  openConstruct() {
    let dialogRef = this.dialog.open(this.construct,{
      width: '350px',
      height: '350px'
  
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

  openConstruct2() {
    let dialogRef = this.dialog.open(this.construct2,{
      width: '350px',
      height: '350px'
  
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
