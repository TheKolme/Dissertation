import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoCart() {
    this.navCtrl.navigateForward('/cart');
  }

  gotoHome() {
    this.navCtrl.navigateForward('/home');
  }

  gotoFavorites() {
    this.navCtrl.navigateForward('/favorites');
  }

  gotoHistory() {
    this.navCtrl.navigateForward('/history');
  }

  gotoProfile() {
    this.navCtrl.navigateForward('/profile');
  }

}
