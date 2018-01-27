import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ComponentBase} from '../../components/component-extension/component-base';
import {CartService, LoDeliveryOption} from '../../app/service/cart-service';
import {AbstractDataRepository} from '../../app/service/repository/abstract/abstract-data-repository';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage extends ComponentBase {

  dataLoaded = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public cart: CartService, public repo: AbstractDataRepository) {
    super();


  }

  validatePage() {
    if (this.cart.pmtMethod.id === 3)
      return (this.cart.validateLoan(this.cart.orderTotal).isValid)
    else
      return true;
  }

  onPlaceOrderClick() {
    console.log('Place Order!');
  }

  onAfterQtyUpdate(item: any, objRef:any): void {
    let j = 0;
    for (let i of this.cart.loResultDeliveryOptions) {
      if (i.idClientOrderProduct === objRef.id)  {
        break;
      }
      j++;
    };

    this.repo.getDeliveryCost(objRef, this.cart.loResultDeliveryOptions[j].loEntityId).then(r => {
        this.cart.loResultDeliveryOptions[j].deliveryCost = r;
      }
    );
    this.evServ.events['cartUpdateEvent'].emit();
  }
}
