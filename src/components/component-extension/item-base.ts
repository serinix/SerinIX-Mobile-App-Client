import {Input, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ComponentBase} from './component-base';
import {Product, ProductStorePlace, QuotationProduct, ProductShort} from '../../app/model/index';
import {AbstractDataRepository} from '../../app/service/repository/abstract/abstract-data-repository';


export class ItemBase extends ComponentBase implements OnInit {

  @Input() product: Product;
  @Input() productShort: ProductShort;
  @Input() preloadQuotes: boolean = false;


  quotes: QuotationProduct[];
  valueQuot: QuotationProduct;
  productStorePlaces: ProductStorePlace[];

  _noOfQuotes = 0;
  resolved = false;

  public get Price(): number {
    if (this.valueQuot)
      return this.valueQuot.price;
    else
      if (this.product)
        return this.product.price
      else
        return this.productShort.price;
  }

  public get OnStock(): boolean {
    return !(this.valueQuot == null);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public repo: AbstractDataRepository) {
    super();

  }

  public get noOfQuotes(): number {
    if ((this.preloadQuotes) && this.quotes) {
      return this.quotes.filter((i) => {return (i.stockQuant>0);}).length;
    } else {
      if (this.product)
        return this.product.supplOffers
      else
        return this.productShort.supplOffers;
    }
  }

  async ngOnInit() {
    super.ngOnInit();
    if (this.preloadQuotes) {
      this.quotes = await this.repo.getQuotationProductsByProductId(this.productShort.id);
      this._noOfQuotes = this.quotes.filter((i) => {return (i.stockQuant>0);}).length;

      // Возвращаем предложение с минимальной ценой
      this.valueQuot = this.quotes.sort((x,y) => {
        return (x.price - y.price);
      })
        .find((i) => {return (i.stockQuant > 0)});

      //this.valueQuot = await this.repo.getValueQuotByProduct(this.product.id);
    }
    if (this.valueQuot) {
      this.productStorePlaces = await this.repo.getProductStorePlacesByQuotId(this.valueQuot.id);
    }

    this.resolved = true;
  }

}
