import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { merch } from '../../../shares/models/merchint.model';
import { EventService } from 'src/app/shares/services/Events.service';
import { eventint } from 'src/app/shares/models/eventsint.model';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private Eservice: EventService) { }

  ngOnInit(): void {
    this.showEvents();
  }
  imageURL = this.Eservice.PhotoUrl;
  events: eventint[] = [];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay:true,
    autoplayTimeout:4500,
    dots: false,
    navSpeed: 700,
    navText: [],
    responsive: {
      0: {
        items: 1
      }
    },
    
  }
  PhotoFilePath: String;
  PhotoFileName: String;

  showEvents(){
    this.Eservice.GET_eventsReadOnly().subscribe(data=>{
      this.events=data;
      this.events.reverse();
    });

  }

}
