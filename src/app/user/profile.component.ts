import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from '../shared/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService,
    private route: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) {}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  validateFirstName() {
    return this.firstName.valid;
  }

  validateLastName() {
    return this.lastName.valid;
  }

  saveProfile(values): void {
    if (this.profileForm.valid) {
      this.authService.updateUser(values.firstName, values.lastName);
      this.route.navigate(['events']);
      this.toastr.success('Profile saved');
    }
  }

  cancel(): void {
    this.route.navigate(['events']);
  }
}
