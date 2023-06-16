import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomePage implements OnInit {
  showSplash = true;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      this.hideSplash();
    });
  }

  hideSplash() {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }
}
