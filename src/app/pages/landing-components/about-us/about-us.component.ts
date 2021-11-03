import { Component, OnInit,ViewChild,TemplateRef,ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { Teams } from '../../../shares/models/Teams.model';
import { TeamsService } from 'src/app/shares/services/Teams.Service';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  constructor(private router:Router, private tService: TeamsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showTeams();
    
  }
  imageURL = this.tService.PhotoUrl;
 
  teams: Teams[] = [];
  showTeams(){
    this.tService.GET_TeamsReadOnly().subscribe(data=>{
      this.teams=data;
      this.teams.reverse();
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(this.callAPIDialog,{
      width: '700px',
  
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
  

  appForm(){
    this.router.navigate(['Application-Form']);
  }
  panelOpenState = false;
}
