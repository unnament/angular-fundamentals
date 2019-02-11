import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'selector-name',
  templateUrl: 'login.component.html',
  styles: [`
   em { float: right; color: red; padding-left: 10px; }
  `]
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { }

  login(values): void {
    console.log(values);
    this.authService.loginUser(values.userName, values.password)
      .subscribe(resp => {
        if (!resp) {
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel(): void {
    this.router.navigate(['events']);
  }
}
