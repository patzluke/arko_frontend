import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-admin-accounts',
  templateUrl: './admin-accounts.component.html',
  styleUrls: ['./admin-accounts.component.css']
})
export class AdminAccountsComponent implements OnInit {

  id : any;
  email : any;
  is_superuser: any;
  token: any;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    
  }
  

}
