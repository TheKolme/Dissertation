import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

  constructor(private navCtrl: NavController) {

  }

  slideOpts = {
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    grabCursor: true,
    spaceBetween: 30,
    zoom: false
  };

  gotoFavorites() {
    this.navCtrl.navigateForward('/favorites');
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

