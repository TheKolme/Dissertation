import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private navCtrl: NavController, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  gotoHome() {
    this.navCtrl.navigateForward('/home');
  }

  gotoFavorites() {
    this.navCtrl.navigateForward('/favorites');
  }

  gotoProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      message: 'You just ordered your items',
      duration: 5000,
      color: 'medium',
      showCloseButton: true,
      closeButtonText: 'Close',
      position: 'bottom'
    });

    toast.present();
  }

}
