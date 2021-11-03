import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { merch } from '../../shares/models/merchint.model';
import { MerchService } from 'src/app/shares/services/Merch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormService } from 'src/app/shares/services/Form.service';


@Component({
  selector: 'app-merchapp',
  templateUrl: './merchapp.component.html',
  styleUrls: ['./merchapp.component.css']
})
export class MerchappComponent implements OnInit {
  form: any;

  constructor(
    private http: HttpClient,
    private Mservice: MerchService, 
    private router: ActivatedRoute, 
    private route: Router,
    private fService: FormService,
    ) { }

    yearLevel = [
      {level: 'First Year'},
      {level: 'Second Year'},
      {level: 'Third Year'},
      {level: 'Fourth Year'},
      {level: 'Fifth Year'},
    ];
  merchs: merch[] = [];
  id: Number;
  mname: String;
  price: number;
  email: String;
  desc: String;
  quantity: number;
  PhotoFileName: String;
  imageURL = this.Mservice.PhotoUrl
  scriptURL = 'script.google.com/macros/s/AKfycbwbplsYBDFn8IxacMJzWtAnZhkJhytvyoT2-wT3UzQVZr-SjHNsOdb0JyN9YgMMCTqB/exec';

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.Mservice.GET_merchReadOnly(this.id).subscribe((data)=>{
      this.mname = data.mname;
      this.price = data.price;
      this.desc = data.desc
     this.PhotoFileName = this.Mservice.PhotoUrl+data.PhotoFileName;
      console.log(data);
  });
  }
  final: number;
  onSubmit(form: NgForm){
    const value = form.value
    if(confirm("Are you Sure you want to Submit??")){
      var val = {
        id: this.id,
        name: value.name, ustEmail: value.ustEmail, year: value.year.level,
        section: value.section, studentNo: value.studentNo, merchName: this.mname,
        quantity: value.quantity,  contactNo: value.contactNo, address: value.address,
        modeOfPayment: value.modeOfPayment, whatMerchNext: value.whatMerchNext, price : this.price * value.quantity
      }
      this.fService.registerOrder(val).subscribe((data=>{
        alert("Successfully Submitted your Order!")
        this.route.navigate(['']);
         console.log(data);
      }))
     
    }
   
  }

}
