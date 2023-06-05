import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  ngOnInit(): void {

    var username = localStorage.getItem('username')
    var password = localStorage.getItem('password')

    if (username != null && password != null) {
      var model = {
        username: username,
        password: password,
      }

      this.accountService.login(model)

      this.router.navigate(['../tabs/dashboard']);
    }


  }


  Login() {

    var model = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    }

    localStorage.setItem('username', model.username)
    localStorage.setItem('password', model.password)
    this.accountService.login(model)

  }

}
