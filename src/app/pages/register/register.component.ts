import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // those variable are synchronized with the <input>
  // thanks to the BANANA IN THE BOX [(ngModel)]
  login = '';
  pass = '';
  pic = '';
  // this function is executed when I submit the form (ngSubmit)
  handleForm() {
    this.us.register(this.login, this.pass, this.pic).subscribe((res: any) => {
      console.log(res);
      if (res.status != 1) {
        alert(res.data);
        //redirect the user to ... the discord app
      } else {
        alert('Everything is good !');
        console.log(res.data.hash);
        // remind the user
        localStorage.setItem('hash', res.data.hash);
        this.router.navigate(['/discord/1']);
      }
    });
  }
  constructor(private us: UserService, private router: Router) {}

  ngOnInit(): void {}
}
