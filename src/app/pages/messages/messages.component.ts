import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  yourMessage = '';
  handleForm() {
    const daHash = localStorage.getItem('hash');
    this.ms
      .createMessage(this.roomId, daHash, this.yourMessage)
      .subscribe();
    this.yourMessage = '';
  }
  // Array that will be shown in the HTML
  // It will contain the messages from THAT chatroom
  messageList = []; // -> [{id, roomId, message, userId, date}]
  // THAT chatroom
  roomId; // -> 1
  constructor(
    private ms: MessagesService,
    private route: ActivatedRoute,
    private us: UserService
  ) {}
  getDatUser(uid) {
    return this.us.getUser(uid);
  }
  ngOnInit(): void {
    // What is the chatroom ID ? roomId-> 1
    this.route.paramMap.subscribe((params) => {
      this.roomId = params.get('id');
    });
    // What are the messages from THAT room ? -> service -> API
    this.refreshChatList();
    // I want to refresh the list of messages
    // every 1 * 1000ms = 1 second
    setInterval(() => this.refreshChatList(), 1 * 1000);
  }
  refreshChatList() {
    this.ms.getAllMessage(this.roomId).subscribe((response: any) => {
      this.messageList = response.data;
    });
  }
}
