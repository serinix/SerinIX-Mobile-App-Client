import {Component, Renderer, Renderer2} from '@angular/core';
import {ComponentBase} from '../component-extension/component-base';
import {AlertController, NavController, NavParams, PopoverController, ViewController} from 'ionic-angular';
import {ProductStorePlace} from '../../app/model/product-store-place';
import {ItemBase} from '../component-extension/item-base';
import {CityPopoverPage} from '../../pages/city-popover/city-popover';

@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopupComponent extends ComponentBase {
  public itemPage: ItemBase;
  public displayLocations: ProductStorePlace[] = new Array<ProductStorePlace>();
  public originalLocations: ProductStorePlace[] = new Array<ProductStorePlace>();

  constructor(public renderer: Renderer, public viewCtrl: ViewController, public navCtrl: NavController,
              public navParams: NavParams, public popoverCtrl: PopoverController,
              private alertCtrl: AlertController) {
    super();
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
    this.itemPage = navParams.get('itemPage');

    this.itemPage.productStorePlaces.forEach(i => {
        this.originalLocations.push(i);
        this.displayLocations.push(i);
      }
    );
  }

  close() {
    this.viewCtrl.dismiss();
  }

  showCitySelector(event) {
    let popover = this.popoverCtrl.create(CityPopoverPage, {caller: this});
    popover.present({
      ev: event
    });
  }

  async selectPickupStorePlace(sPlace: ProductStorePlace) {
    let sp = await (<any>sPlace).storeplace;
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you about to select '+sp.name +' for pickup this item?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            (<any>this.itemPage).selectedStorePlace = sp;
            this.viewCtrl.dismiss();
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });

    alert.present();



  }

}
