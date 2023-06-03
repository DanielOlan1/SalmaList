import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomePage implements OnInit {
  timer: number = 0;


  slideOpts = {
    initialSlide: 1,
    speed: 100,
    loop: true,
    autoplay: {
      delay: 4000
    }
  }


  constructor(navCtrl: NavController, private router: Router) { }


  ngOnInit() {

    // const intervalID = setInterval(timerFunction, 3000, this.router);
    const intervalID = setTimeout(timerFunction, 3000, this.router);
    function timerFunction(_router: Router) {
      console.log('Splash screen over, Go to login');
      _router.navigate(["/login"]);

    }


  }




}
