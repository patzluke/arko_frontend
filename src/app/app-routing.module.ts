import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
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
import { NavbarComponent } from './pages/landing-components/navbar/navbar.component';
import { LandingComponentsComponent } from './pages/landing-components/landing-components.component';
import { ArticlesComponent } from './pages/landing-components/articles/articles.component';
import { AdminMerchComponent } from "./pages/admin/admin-merch/admin-merch.component";
import { AdminAccountsListComponent } from "./pages/admin/admin-accounts/admin-accounts-list/admin-accounts-list.component";
import { AdminAccountsAddComponent } from "./pages/admin/admin-accounts/admin-accounts-add/admin-accounts-add.component";
import { AdminAccountsEditComponent } from "./pages/admin/admin-accounts/admin-accounts-edit/admin-accounts-edit.component";
import { AdminArticlesListComponent } from "./pages/admin/admin-articles/admin-articles-list/admin-articles-list.component";
import { AdminArticlesAddComponent } from "./pages/admin/admin-articles/admin-articles-add/admin-articles-add.component";
import { AdminArticlesEditComponent } from "./pages/admin/admin-articles/admin-articles-edit/admin-articles-edit.component";
import { AdminMerchAddComponent } from "./pages/admin/admin-merch/admin-merch-add/admin-merch-add.component";
import { AdminMerchListComponent } from "./pages/admin/admin-merch/admin-merch-list/admin-merch-list.component";
import { AdminMerchEditComponent } from "./pages/admin/admin-merch/admin-merch-edit/admin-merch-edit.component";
import { AdminShowroomListComponent } from "./pages/admin/admin-showroom/admin-showroom-list/admin-showroom-list.component";
import { AdminShowroomAddComponent } from "./pages/admin/admin-showroom/admin-showroom-add/admin-showroom-add.component";
import { AdminShowroomEditComponent } from "./pages/admin/admin-showroom/admin-showroom-edit/admin-showroom-edit.component";
import { RouteGuardGuard } from "./shares/Guards/route-guard.guard";
import { AdminProfileComponent } from "./pages/admin/admin-profile/admin-profile.component";
import { ArticleComponent } from "./pages/article/article.component";
import { MerchappComponent } from "./pages/merchapp/merchapp.component";
import { ShowroomPageComponent } from "./pages/showroom-page/showroom-page.component";
import { ShowroomRoomComponent } from "./pages/showroom-room/showroom-room.component";
import { AdminEventsListComponent } from "./pages/admin/admin-events/admin-events-list/admin-events-list.component";
import { AdminEventsAddComponent } from "./pages/admin/admin-events/admin-events-add/admin-events-add.component";
import { AdminEventsEditComponent } from "./pages/admin/admin-events/admin-events-edit/admin-events-edit.component";
import { AdminMerchorderComponent } from "./pages/admin/admin-merchorder/admin-merchorder.component";
import { AdminApplicantsComponent } from "./pages/admin/admin-applicants/admin-applicants.component";
import { AdminTeamsComponent } from "./pages/admin/admin-teams/admin-teams.component";
import { AdminTeamsListComponent } from "./pages/admin/admin-teams/admin-teams-list/admin-teams-list.component";
import { AdminTeamsAddComponent } from "./pages/admin/admin-teams/admin-teams-add/admin-teams-add.component";
import { AdminTeamsEditComponent } from "./pages/admin/admin-teams/admin-teams-edit/admin-teams-edit.component";
const appRoutes: Routes = [
    { path: '', 
    component: LandingComponentsComponent},
  
    { path: 'login', 
    component: LoginComponent},
  
    { path: 'dashboard', 
    component: AdminComponent, children:[
      {
        path: '',
        component: AdminProfileComponent
      },

    

      {
        path: 'merch-order',
        component: AdminMerchorderComponent
      },

      {
        path: 'applicant',
        component: AdminApplicantsComponent
      },
      
      {
      path: 'account',
      component: AdminAccountsComponent, 
      children:[
        {
          path: '',
          component: AdminAccountsListComponent
        },

        {
          path: 'add',
          component: AdminAccountsAddComponent
        },
        
        {
          path: 'edit/:id',
          component: AdminAccountsEditComponent
        }
      ]

      },

      {
        path: 'teams',
        component: AdminTeamsComponent, children:[
          {
          path: '',
          component: AdminTeamsListComponent
        },
        {
          path: 'add',
          component: AdminTeamsAddComponent
        },
        {
          path: 'edit/:id',
          component: AdminTeamsEditComponent
        },
        ]
      },

     {path: 'articles',
      component: AdminArticlesComponent, children:[
      {
        path: '',
        component: AdminArticlesListComponent
      },
      {
        path: 'add',
        component: AdminArticlesAddComponent
      },
      {
        path: 'edit/:id',
        component: AdminArticlesEditComponent
      }
    ]
     },

     {path: 'exhibit',
      component: AdminShowroomComponent, children:[
        {
          path:'',
          component: AdminShowroomListComponent
        },

        {
          path:'add',
          component: AdminShowroomAddComponent
        },
        {
          path:'edit/:id',
          component: AdminShowroomEditComponent
        }
      ]
     },

     {path: 'merchandise',
      component: AdminMerchComponent, children: [
        {
          path: '',
          component: AdminMerchListComponent
        },

        {
          path: 'add',
          component: AdminMerchAddComponent
        },

        {
          path: 'edit/:id',
          component: AdminMerchEditComponent
        }
      ]
     },

     {path: 'events',
     component: AdminEventsComponent, children: [
      {
        path: '',
        component: AdminEventsListComponent
      },

      {
        path: 'add',
        component: AdminEventsAddComponent
      },

      {
        path: 'edit/:id',
        component: AdminEventsEditComponent
      }
     ]
    },

    {path: 'registered',
     component: AdminRegisteredComponent
    }
    
    ]},

    { path: 'Showroom-page', 
    component: ShowroomPageComponent},
  
    { path: 'About-Us', 
    component: AboutUsComponent},
  
    { path: 'Showroom', 
    component: ShowroomComponent},
  
    { path: 'Articles', 
    component: ArticlesComponent,},
  
    { path: 'Application-Form', 
      component: ApplicationComponent},

    { path: 'more', 
      component: ArticlePageComponent},
    
    { path: 'forgot', 
      component: ForgotpassComponent},
    {
      path: 'article/:id/:title',
      component: ArticleComponent
    },
    {
      path: 'order/:id',
      component: MerchappComponent
    },
    {
      path: 'Showroom/:id/:title',
      component: ShowroomRoomComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}

export const routingComponents = [
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
  AdminMerchComponent,
  ShowroomPageComponent
]