import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  /* Room list */
  roomsList = [];
  constructor(private roomsS: RoomsService) {}
  ngOnInit(): void {
    this.roomsS.getRooms().subscribe((result: any) => {
      console.log(result);
      this.roomsList = result.data;
    });
  }

  /* New Room creation */
  name = '';
  handleForm() {
    this.roomsS.createRoom(this.name).subscribe((result: any) => {
      console.log(result);
      this.roomsList = result.data;
      this.name = '';
    });
  }
}
