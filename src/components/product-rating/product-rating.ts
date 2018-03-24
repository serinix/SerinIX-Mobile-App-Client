import {Component, Input} from '@angular/core';
import {ProductShort} from '../../app/model/index';
import {NavController} from 'ionic-angular';
import {ItemReviewsPage} from '../../pages/item-reviews/item-reviews';

@Component({
  selector: 'product-rating',
  templateUrl: 'product-rating.html'
})
export class ProductRatingComponent {

  @Input() productShort: ProductShort;

  constructor(public navCtrl: NavController) {
  }

  async openReviews(event: Event, data: ProductShort) {
    event.stopPropagation();
    this.navCtrl.push(ItemReviewsPage, {product: await (<any>this.productShort).product_p});
  }


}
