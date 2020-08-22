import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersApiUrl = environment.baseUrl + '/users';
  // this is filled by the user array f rom the server
  usersList = []; //[{id, username, picture}]

  // Launched when Initialisation
  constructor(private http: HttpClient) {
    this.refreshUserList();
    // Launch the refresh of the userList each 1 * 1000ms => 1s
    setInterval(() => this.refreshUserList(), 1 * 1000);
  }

  // Get the list of users AND STORE IT IN "usersList"
  refreshUserList() {
    this.http.get(this.usersApiUrl).subscribe((res: any) => {
      this.usersList = res.data;
    });
  }
  // Retrieve a specific user using id
  getUser(providedId) {
    // Syntax Example :  array1.find(element => element > 10);
    const datUser = this.usersList.find((user) => user.id === providedId);
    return datUser;
  }

  getAllUsers() {
    return this.usersList; // ->[user]
  }

  // Register : POST send the credentials of tha new user (including picture))
  register(login, pass, pic) {
    const dataToSend = {
      username: login,
      password: pass,
      image: pic,
    };
    return this.http.post(this.usersApiUrl, dataToSend);
  }
  // Connection -> POST check for the credentials
  connect(login, pass) {
    const dataToSend = {
      username: login,
      password: pass,
    };
    return this.http.post(this.usersApiUrl, dataToSend);
  }
}
