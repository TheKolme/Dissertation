import { Component, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { products } from '../classes/product';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('HomeSlider') homeSlider: IonSlides;

  public items = products;

  public images = [
    {
      index: 0,
      name: 'New',
      image: '1.jpg'
    },
    {
      index: 1,
      name: 'Dress',
      image: '2.jpg'
    },
    {
      index: 2,
      name: 'Sweatshirt',
      image: '3.jpg'
    },
    {
      index: 3,
      name: 'Tops',
      image: '4.jpg'
    },
    {
      index: 4,
      name: 'Accessories',
      image: '5.jpg'
    },
    {
      index: 5,
      name: 'Bottoms',
      image: '6.jpg'
    },
    {
      index: 6,
      name: 'Shoes',
      image: '7.jpg'
    },
    {
      index: 7,
      name: 'Men',
      image: '8.jpg'
    }
  ];

  cards = [
    { title: 'Card One', name: 'Card1', icon: 'heart-empty' }
  ];

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

  chipSlideOpts = {
    loop: false,
    slidesPerView: 6,
    slidesPerGroup: 6,
    grabCursor: true,
    spaceBetween: 10,
    zoom: false
  };

  gotoFavorites() {
    this.navCtrl.navigateForward('/favorites');
  }

  gotoProduct(id: number) {
    this.navCtrl.navigateForward('/product/' + id);
  }

  gotoCart() {
    this.navCtrl.navigateForward('/cart');
  }

  gotoProfile() {
    this.navCtrl.navigateForward('/profile');
  }

  goToSlide(index: number) {
    this.homeSlider.slideTo(index + 2);
  }

  toggleLiked(card: any) {

    if (card.icon === 'heart') {
      card.icon = 'heart-empty';
    } else {
      card.icon = 'heart';
    }
  }
}

