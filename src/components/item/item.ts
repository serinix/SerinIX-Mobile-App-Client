import {Component} from '@angular/core';
import {ProductShort, Product} from '../../app/model/index';
import {NavController, NavParams} from 'ionic-angular';
import {AbstractDataRepository} from '../../app/service/repository/abstract/abstract-data-repository';
import {ItemBase} from '../component-extension/item-base';


@Component({
  selector: 'item',
  templateUrl: 'item.html'
})

export class ItemComponent extends ItemBase {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public repo: AbstractDataRepository) {
    super(navCtrl, navParams, repo);
  }

  async ngOnInit() {
    super.ngOnInit();
  }

  async openItemDetails(data: ProductShort)
  {
    let prod = await (<any>data);
    this.navCtrl.push('ItemDetailPage', {prod: prod, loadQuotes: true});
  }

}
