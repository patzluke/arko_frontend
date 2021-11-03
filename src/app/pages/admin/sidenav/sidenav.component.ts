import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { user } from 'src/app/shares/models/userint.model';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/shares/services/Account.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private Aservice: AccountService,
    private cookieService: CookieService) { }


  id: Number;
  User: user;
  is_superuser = this.cookieService.get('is_superuser')
 

  ngOnInit(): void {
  }

   

  showAccounts(){
    this.router.navigate(['account'], {relativeTo: this.route})
  }

  showExhibit(){
    this.router.navigate(['exhibit'], {relativeTo: this.route})
  }

  showMerchandise(){
    this.router.navigate(['merchandise'], {relativeTo: this.route})
  }

  showEvents(){
    this.router.navigate(['events'], {relativeTo: this.route})
  }

  showArticles(){
    this.router.navigate(['articles'], {relativeTo: this.route})
  }

  logout(){
      this.cookieService.delete('id');
      this.cookieService.delete('email');
      this.cookieService.delete('is_superuser');
      this.cookieService.delete('mr-token');
      this.router.navigate([''])
      console.log('id');
      console.log('email');
      console.log('is_superuser');
      console.log('mr-token');
      this.router.navigate(['login']);
  }
  
}
