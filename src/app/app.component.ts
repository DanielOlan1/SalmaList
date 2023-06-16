import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  showSplash = true;

  constructor(
    private platform: Platform,
    private router: Router) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.hideSplash();
    });
  }

  hideSplash() {
    setTimeout(() => {
      this.showSplash = false;
      this.router.navigate(['/login']);
    }, 3000);
  }
  
}
