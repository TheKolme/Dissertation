import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoHome() {
    this.navCtrl.navigateForward('/home');
  }
  gotoFavorites() {
    this.navCtrl.navigateForward('/favorites');
  }

  gotoProduct() {
    this.navCtrl.navigateForward('/product');
  }

}
