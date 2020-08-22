import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  msgApiUrl = environment.baseUrl + '/messages';
  constructor(private http: HttpClient) {}
  // retrieve all messages
  getAllMessage(roomId) {
    // https://ajax-course.herokuapp.com/messages/1
    return this.http.get(this.msgApiUrl + '/' + roomId);
  }
  // send a new message
  createMessage(roomId, userHash, msg) {
    const dataToSend = {
      hash: userHash,
      message: msg,
    };
    console.log(this.msgApiUrl + '/' + roomId);
    console.log(dataToSend);
    return this.http.post(this.msgApiUrl + '/' + roomId, dataToSend);
  }
}
