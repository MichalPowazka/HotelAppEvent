import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';

const routes: Routes = [
 
  {
    path:'',
    redirectTo :'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'rooms',
        component:RoomsComponent,
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'new-booking',
        component:NewBookingComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'layout',
        component:LayoutComponent
      },
      {
        path:'booking-list',
        component:BookingListComponent
      },
      {
        path:'booking-calender',
        component:BookingCalenderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
