import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shares/models/Accounts.model';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/shares/services/Account.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private cookieService: CookieService,
    private route: Router,  
    private Aservice: AccountService,
    private router: ActivatedRoute,
    private modal: NgbModal) { }

  id : any;
  email : any;
  is_superuser: any;
  token: any;
  lastname: any;
  firstname:any;
  _id: Number;
 
 


  imageURL = this.Aservice.PhotoUrl

  ngOnInit(): void {
    this.details();
    
  }

  details(){
    this.id = this.cookieService.get('id');
    this.email = this.cookieService.get('email');
    this.is_superuser = this.cookieService.get('is_superuser');
    this.token = this.cookieService.get('mr-token');
    this.firstname = this.cookieService.get('firstname');
    this.lastname = this.cookieService.get('lastname');
    console.log(this.id);
    console.log(this.email);
    console.log(this.token);
    console.log(this.is_superuser);
    console.log(this.firstname);
    console.log(this.lastname);
    
  }

  logout(){
    this.cookieService.delete('id');
    this.cookieService.delete('email');
    this.cookieService.delete('is_superuser');
    this.cookieService.delete('mr-token');
    this.cookieService.delete('lastname');
    this.cookieService.delete('firstname');
    console.log('id');
    console.log('email');
    console.log('is_superuser');
    console.log('mr-token')
  }

  
}
