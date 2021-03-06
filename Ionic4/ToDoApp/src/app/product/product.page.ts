import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides, IonSlide } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  @ViewChild('ProductSlider') productSlider: IonSlides;

  public currentSlide: number = 1;

  public totalSlides: number = 0;

  private productId: number = 1;

  public product: Product;

  constructor(private navCtrl: NavController, private toastCtrl:ToastController, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.activatedRoute.snapshot.paramMap.get('productid'));
    this.product = products.filter(product => product.id == this.productId)[0];

    console.log(this.product);

    this.productSlider.ionSlideDrag.subscribe(() => {
      this.productSlider.stopAutoplay();
    });

    this.productSlider.length().then(count => { this.totalSlides = count; });

    this.productSlider.ionSlideDidChange.subscribe((e) => {
      this.productSlider.getActiveIndex().then(index => {
        this.currentSlide = index + 1;
      });
    })

    this.productSlider.startAutoplay();
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

  gotoCart() {
    this.navCtrl.navigateForward('/cart');
  }

  gotoProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  async showToast() {
    let toast = await this.toastCtrl.create({
      message: 'Product added to cart',
      duration: 5000,
      color: 'medium',
      showCloseButton: true,
      closeButtonText: 'Close',
      position: 'bottom'
    });

    toast.present();
  }

}
