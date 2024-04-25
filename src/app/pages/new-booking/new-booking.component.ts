import { Component } from '@angular/core';
import { AddBookingRequest, Room } from '../../core/api/models';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomService } from '../../core/api/services';
import { RoomModel } from '../rooms/roomDto';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrl: './new-booking.component.css'
})
export class NewBookingComponent {
  rooms : RoomModel[] = [];

  constructor(private roomService : RoomService,     public modalService: NgbModal, private sanitizer: DomSanitizer) {
    
    
  }

  ngOnInit(): void {
    this.roomService.roomGetRoomAllGet$Json$Response().subscribe(res => {
      if(res.body.listRooms){
        this.rooms = res.body.listRooms;
        this.rooms.forEach(room => {
           if(room.images && room.images[0])
           room.imageSrc= this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + room.images[0].image);
          
        });
      }

      console.log(this.rooms)
    }
    );
  }



  addReservation(room: Room){
    // let req  : AddBookingRequest = {};
    // req.roomStreamId = room.roomStream,
    // req.id = room.id,
    // req.dateFrom = 
  }
}
