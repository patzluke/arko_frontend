import { Component, OnInit, Inject, ViewChild,TemplateRef } from '@angular/core';
import { order } from 'src/app/shares/models/merchOrder.model';
import { FormService } from 'src/app/shares/services/Form.service';
import { ArchivingService } from 'src/app/shares/services/Archiving.service';
import { DatePipe } from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Component({
  selector: 'app-admin-merchorder',
  templateUrl: './admin-merchorder.component.html',
  styleUrls: ['./admin-merchorder.component.css']
})
export class AdminMerchorderComponent implements OnInit {

  constructor(private fService: FormService,
    private arService: ArchivingService, 
    public datepipe: DatePipe,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.showOrder();
  }
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>; 
  p: number = 1;
  orders: order[] = [];
  id: number;
  title: String = "Orders of "
  dateToday = new Date();
  latest: String = this.datepipe.transform(this.dateToday, 'yyyy');
  finalTitle :string = this.title + " " + this.latest;

  showOrder(){
    this.fService.GET_Orders().subscribe((data=>{
      this.orders = data;
      this.orders.reverse();
    }))
  }
  exportElmToExcel(order):void {
    if(confirm('Are you sure??')){
      this.arService.exportAsExcelFile(this.orders, this.finalTitle);
      this.archiveApplicants(order);
      }
 }

 archiveApplicants(order){
  for(let i = 0 ; i <= this.orders.length; i++){
    this.orders[i];
      this.fService.DELETE_Order(this.orders[i].id).subscribe(data=>{ 
})

  }
}

year:String;
section: String;
contactNo: number;
address: String;
studentNo: String;
modeOfPayment: String;
whatMerchNext: String;
price: number

openDialog(id: Number) {
  this.fService.GET_Order(id).subscribe((data=>{
    this.year = data.year;
    this.section = data.section;
    this.contactNo = data.contactNo;
    this.address = data.address;
    this.modeOfPayment = data.modeOfPayment;
    this.whatMerchNext = data.whatMerchNext;
    this.studentNo = data.studentNo;
    this.price = data.price;
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
