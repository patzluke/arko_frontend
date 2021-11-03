import { Component, OnInit } from '@angular/core';
import { Merch } from '../../../../shares/models/Merch.model'
import { MerchService } from 'src/app/shares/services/Merch.service';


@Component({
  selector: 'app-admin-merch-list',
  templateUrl: './admin-merch-list.component.html',
  styleUrls: ['./admin-merch-list.component.css']
})
export class AdminMerchListComponent implements OnInit {

  constructor(private Mservice: MerchService) { }
  p: number = 1;
  merchs: Merch[]

  ngOnInit(): void {
    this.showMerchs();
  
  }

  showMerchs(){
    this.Mservice.GET_merchs().subscribe(data=>{
      this.merchs=data;
      this.merchs.reverse();
      console.log(data);
    });
  }

  deleteClick(merch){
    if(confirm('Are you sure??')){
      this.Mservice.DELETE_merch(merch.id).subscribe(data=>{
        alert("Successfully Deleted The Merchandise");
        window.location.reload();
      },
      error =>{
        alert("There was an Error with Deleting the Merchandise")
      })
      

    } 
  }

}
