import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private us: UserService) {}
  // -> HTML ngFor [user]
  usersList() {
    return this.us.getAllUsers();
  }

  ngOnInit(): void {}
}
