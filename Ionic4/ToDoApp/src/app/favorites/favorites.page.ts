import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoHome() {
    this.navCtrl.navigateForward('/home');
  }

  gotoProduct() {
    this.navCtrl.navigateForward('/product');
  }

  gotoCart() {
    this.navCtrl.navigateForward('/cart');
  }

  gotoProfile() {
    this.navCtrl.navigateForward('/profile');
  }
}
