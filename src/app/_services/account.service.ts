import { user } from './../_models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import { Member } from '../_models/member';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  token = environment;
  private currentUserSource = new ReplaySubject<user>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(
    private http: HttpClient, 
    private router: Router, 
    private toastService: ToastService
             ) { }

  login(model: any) {
    console.log('accountService login')
    return this.http.post(this.baseUrl + 'Account/login', model).subscribe({
      next: (response) => {
        console.log('login', response);
        const user: any = response;
        if (user) {
          this.setCurrentUser(user);
          this.router.navigate(['../tabs/monitoreo']);
        }
      },

      error: (e) => {
        console.log('Error', e);
        // Redireccionar a Login y mostrar Alerta
        this.logout()
        this.router.navigate(["/login"]);
        this.toastService.presentToast('middle', 'Usuario o contrasena son incorrectos', 2000)
      },
    });


  }

  setCurrentUser(user: user) {
    console.log(user)
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);

    // guardar usuario en Local Storage
    localStorage.setItem('user', JSON.stringify(user));

    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['../login']);

    // this.currentUserSource.next(null);

  }

  getDecodedToken(_token: string) {
    return JSON.parse(atob(_token.split('.')[1]));
  }


  getUser() {
    const _user: user = JSON.parse(localStorage.getItem('user') || '{}');

    return _user
  }

  getToken() {
    var _token = this.getUser().token
    console.log("account service _token", _token)
    return _token;
  }

  getMembers() {
    const _member: Member = JSON.parse(localStorage.getItem('member') || '{}');
    return _member
  }
}
