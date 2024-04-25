import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Room } from '../../core/api/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoomService } from '../../core/api/services';

@Component({
  selector: 'app-update-room-dialog',
  templateUrl: './update-room-dialog.component.html',
  styleUrl: './update-room-dialog.component.css'
})
export class UpdateRoomDialogComponent {
  @Input() public room: any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @ViewChild('file') file : any;

  constructor(public activeModal: NgbActiveModal, private roomService: RoomService) {}

  ngOnInit() {

  }

  onFileSelected(event :any) {

    const file:File = event.target.files[0];

    if (file) {

        this.roomService.roomUploadFilePost$Json({ RoomId: this.room.id, body : { File: file }}).subscribe(res=>console.log(res))

    }
}

  passBack() {
    this.passEntry.emit(this.room);

    this.activeModal.close(this.room);
  }
}