import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../core/api/services';
import { Room, UpdateRoomRequest } from '../../core/api/models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateRoomDialogComponent } from '../update-room-dialog/update-room-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';
import { RoomModel } from './roomDto';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent  implements OnInit{
  rooms : RoomModel[] = [];

  constructor(private roomService : RoomService,    public modalService: NgbModal, private sanitizer: DomSanitizer) {
    
    
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

     
    }
    );
  }


  update(room: Room){

    let updatedRoom = Object.assign({}, room);

    const modalRef = this.modalService.open(UpdateRoomDialogComponent);
    modalRef.componentInstance.room =updatedRoom;
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);  
        
        // const req :  UpdateRoomRequest ={
        //   id : result.id,
        //   name : result.name,
        //   description : result.description,
        //   city : result.city,
        //   street : result.street,
        //   houseNumber : result.houseNumber,
        //   apartamentNumber : result.apartamentNumber,
        //   postCode : result.postCode
        // }
        // this.roomService.roomUpdateRoomPut$Json({body:req}).subscribe(res => {console.log(res)
        //   this.ngOnInit();

        // })
      }
    });
  }
}
