import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

/* ng g s services/rooms */

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomApiUrl = environment.baseUrl + '/rooms';
  constructor(private http: HttpClient) {}
  getRooms() {
    return this.http.get(this.roomApiUrl);
  }
  createRoom(nameParam) {
    // nameParam is what this function is provided with
    // 'roomName' is the expect info on the server side
    const dataToSend = {
      roomName: nameParam,
    };
    return this.http.post(this.roomApiUrl, dataToSend);
  }
}
