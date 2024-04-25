import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { NewBookingComponent } from './pages/new-booking/new-booking.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UsersComponent } from './pages/users/users.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookingCalenderComponent } from './pages/booking-calender/booking-calender.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './service/auth-interceptor';
import { RoomManagementComponent } from './pages/room-management/room-management.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UpdateRoomDialogComponent } from './pages/update-room-dialog/update-room-dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent,
    LayoutComponent,
    LoginComponent,
    NewBookingComponent,
    RoomsComponent,
    UsersComponent,
    DashboardComponent,
    BookingCalenderComponent,
    RoomManagementComponent,
    AdminComponent,
    UpdateRoomDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
