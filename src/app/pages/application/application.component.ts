import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormService } from 'src/app/shares/services/Form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  form: any;

  constructor(private fService: FormService, private router: Router) { }

  ngOnInit(): void {
  }

  yearLevel = [
    {level: 'First Year'},
    {level: 'Second Year'},
    {level: 'Third Year'},
    {level: 'Fourth Year'},
    {level: 'Fifth Year'},
  ];
  id: Number;
  onSubmit(form: NgForm){
    const value = form.value

   
    if(confirm("Are you Sure you want to Submit??")){
      var val = {
        id: this.id,
        name: value.name, ustEmail: value.ustEmail, year: value.year.level,
        section: value.section, studentNo: value.studentNo, sex: value.Sex,
        birthDate: value.birthDate, age: value.age, membershipStatus: value.membershipStatus,
        contact: value.contact, address: value.address, facebookLink: value.facebookLink,
        lookingForward: value.lookingForward, typeOfEvents: value.typeOfEvents,
        topicsIntrested: value.topicsIntrested
      }
      this.fService.registerMember(val).subscribe((data=>{
        console.log(data)
        alert("Successfully Submitted your Application!")
        this.router.navigate(['']);
      }))
     
    console.log()
  }
  }

}
