import { Component, OnInit } from '@angular/core';
import { Teams } from '../../../../shares/models/Teams.model';
import { TeamsService } from 'src/app/shares/services/Teams.Service';

@Component({
  selector: 'app-admin-teams-list',
  templateUrl: './admin-teams-list.component.html',
  styleUrls: ['./admin-teams-list.component.css']
})
export class AdminTeamsListComponent implements OnInit {

  constructor(private tService: TeamsService) { }
  teams: Teams[] = [];
  p: number = 1;

  ngOnInit(): void {
    this.showTeams();
  }
  
  showTeams(){
    this.tService.GET_Teams().subscribe(data=>{
      this.teams=data;
      this.teams.reverse();
     
    });
  }

  deleteClick(event){
    if(confirm('Are you sure??')){
      this.tService.DELETE_Team(event.id).subscribe(data=>{
        alert("Successfully Deleted The Event");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Event")
      })
      

    } 
  }

}
