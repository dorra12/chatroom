import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent implements OnInit {
  login = '';
  pass = '';
  handleForm() {
    this.us.connect(this.login, this.pass).subscribe((res: any) => {
      console.log(res);
      if (res.status != 1) {
        alert(res.data);
        //redirect the user to ... the discord app
      } else {
        alert('Everything is good !');
        this.router.navigate(['/discord/1']);
        // remind the user
        localStorage.setItem('hash', res.data.hash);
      }
    });
  }
  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {}
}
