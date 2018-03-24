import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {ComponentBase} from '../../components/component-extension/component-base';
import {ProductShort} from '../../app/model/index';
import {QuotationProduct} from '../../app/model/quotation-product';
import {AbstractDataRepository} from '../../app/service/repository/abstract/abstract-data-repository';
import {CartService} from '../../app/service/cart-service';

@IonicPage()
@Component({
  selector: 'page-item-quotes',
  templateUrl: 'item-quotes.html',
})

export class ItemQuotesPage extends ComponentBase {

  productShort: ProductShort;

  quotes: QuotationProduct[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public repo: AbstractDataRepository, public cart: CartService, public toastCtrl: ToastController) {
    super();
    this.productShort = this.navParams.data.prod;
    this.quotes = this.navParams.data.quotesArr;
  }

  async ngOnInit() {
    super.ngOnInit();
    this.quotes = (await this.repo.getQuotationProductsByProductId(this.productShort.id))
                    .filter((i) => {return (i.stockQuant>0);});
  }

  onAddToCart(quote: QuotationProduct, price: number) {
    this.cart.addItem(quote, 1, price, null, this);
  }

}
