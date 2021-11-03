import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminAccountsComponent } from './pages/admin/admin-accounts/admin-accounts.component';
import { AdminArticlesComponent } from './pages/admin/admin-articles/admin-articles.component';
import { AdminEventsComponent } from './pages/admin/admin-events/admin-events.component';
import { AdminShowroomComponent } from './pages/admin/admin-showroom/admin-showroom.component';
import { AdminRegisteredComponent } from './pages/admin/admin-registered/admin-registered.component';
import { SidenavComponent } from './pages/admin/sidenav/sidenav.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ApplicationComponent } from './pages/application/application.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpassComponent } from './pages/forgotpass/forgotpass.component';
import { EventsComponent } from './pages/landing-components/events/events.component';
import { AboutUsComponent } from './pages/landing-components/about-us/about-us.component';
import { ShowroomComponent } from './pages/landing-components/showroom/showroom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './pages/landing-components/navbar/navbar.component';
import { LandingComponentsComponent } from './pages/landing-components/landing-components.component';
import { ArticlesComponent } from './pages/landing-components/articles/articles.component';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { IntroComponent } from './pages/landing-components/intro/intro.component';
import { FooterComponent } from './pages/landing-components/footer/footer.component';
import { AdminMerchComponent } from './pages/admin/admin-merch/admin-merch.component';
import { AdminAccountsAddComponent } from './pages/admin/admin-accounts/admin-accounts-add/admin-accounts-add.component';
import { AdminAccountsEditComponent } from './pages/admin/admin-accounts/admin-accounts-edit/admin-accounts-edit.component';
import { AdminAccountsListComponent } from './pages/admin/admin-accounts/admin-accounts-list/admin-accounts-list.component';
import { AdminArticlesAddComponent } from './pages/admin/admin-articles/admin-articles-add/admin-articles-add.component';
import { AdminArticlesListComponent } from './pages/admin/admin-articles/admin-articles-list/admin-articles-list.component';
import { AdminArticlesEditComponent } from './pages/admin/admin-articles/admin-articles-edit/admin-articles-edit.component';
import { AdminMerchAddComponent } from './pages/admin/admin-merch/admin-merch-add/admin-merch-add.component';
import { AdminMerchEditComponent } from './pages/admin/admin-merch/admin-merch-edit/admin-merch-edit.component';
import { AdminMerchListComponent } from './pages/admin/admin-merch/admin-merch-list/admin-merch-list.component';
import { AdminShowroomAddComponent } from './pages/admin/admin-showroom/admin-showroom-add/admin-showroom-add.component';
import { AdminShowroomEditComponent } from './pages/admin/admin-showroom/admin-showroom-edit/admin-showroom-edit.component';
import { AdminShowroomListComponent } from './pages/admin/admin-showroom/admin-showroom-list/admin-showroom-list.component';
import { AccountService } from './shares/services/Account.service';
import { MerchService } from './shares/services/Merch.service';
import { ArticleService } from './shares/services/Articles.service';
import { ConnectionService } from './shares/services/Connection.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { ArticleComponent } from './pages/article/article.component';
import { MerchappComponent } from './pages/merchapp/merchapp.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import {DemoMaterialModule} from 'src/app/shares/Material/materialModule';
import { ShowroomPageComponent } from './pages/showroom-page/showroom-page.component';
import { ShowroomRoomComponent } from './pages/showroom-room/showroom-room.component';
import { AdminEventsAddComponent } from './pages/admin/admin-events/admin-events-add/admin-events-add.component';
import { AdminEventsEditComponent } from './pages/admin/admin-events/admin-events-edit/admin-events-edit.component';
import { AdminEventsListComponent } from './pages/admin/admin-events/admin-events-list/admin-events-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { AdminMerchorderComponent } from './pages/admin/admin-merchorder/admin-merchorder.component';
import { AdminApplicantsComponent } from './pages/admin/admin-applicants/admin-applicants.component'
import {MatDialogModule} from '@angular/material/dialog';
import { AdminTeamsComponent } from './pages/admin/admin-teams/admin-teams.component';
import { AdminTeamsEditComponent } from './pages/admin/admin-teams/admin-teams-edit/admin-teams-edit.component';
import { AdminTeamsAddComponent } from './pages/admin/admin-teams/admin-teams-add/admin-teams-add.component';
import { AdminTeamsListComponent } from './pages/admin/admin-teams/admin-teams-list/admin-teams-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminAccountsComponent,
    AdminArticlesComponent,
    AdminEventsComponent,
    AdminShowroomComponent,
    AdminRegisteredComponent,
    SidenavComponent,
    ArticlePageComponent,
    ApplicationComponent,
    LoginComponent,
    ForgotpassComponent,
    EventsComponent,
    AboutUsComponent,
    ShowroomComponent,
    NavbarComponent,
    LandingComponentsComponent,
    ArticlesComponent,
    IntroComponent,
    FooterComponent,
    AdminMerchComponent,
    routingComponents,
    AdminAccountsAddComponent,
    AdminAccountsEditComponent,
    AdminAccountsListComponent,
    AdminArticlesAddComponent,
    AdminArticlesListComponent,
    AdminArticlesEditComponent,
    AdminMerchAddComponent,
    AdminMerchEditComponent,
    AdminMerchListComponent,
    AdminShowroomAddComponent,
    AdminShowroomEditComponent,
    AdminShowroomListComponent,
    AdminProfileComponent,
    ArticleComponent,
    MerchappComponent,
    ShowroomPageComponent,
    ShowroomRoomComponent,
    AdminEventsAddComponent,
    AdminEventsEditComponent,
    AdminEventsListComponent,
    AdminMerchorderComponent,
    AdminApplicantsComponent,
    AdminTeamsComponent,
    AdminTeamsEditComponent,
    AdminTeamsAddComponent,
    AdminTeamsListComponent,
 
    
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule,
    EditorModule,
    NgbModule,
    MatSliderModule,
    DemoMaterialModule,
    CarouselModule,
    MatDialogModule
    

  ],
  providers: [
    AccountService,
    MerchService, 
    ArticleService,
    DatePipe
    ], 
  bootstrap: [AppComponent
  ]
})
export class AppModule { }
