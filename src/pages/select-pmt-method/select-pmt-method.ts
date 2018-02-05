import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ComponentBase} from '../../components/component-extension/component-base';
import {AbstractDataRepository} from '../../app/service/repository/abstract/abstract-data-repository';
import {CartService} from '../../app/service/cart-service';
import {NgForm} from '@angular/forms';
import {CreditCalcPage} from '../credit-calc/credit-calc';


@IonicPage()
@Component({
  selector: 'page-select-pmt-method',
  templateUrl: 'select-pmt-method.html',
})
export class SelectPmtMethodPage extends ComponentBase {

  @ViewChild('f') personInfoEditForm: NgForm;
  pmtMethods = [];
  dataLoaded = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public repo: AbstractDataRepository, public cart: CartService,
              public modalCtrl: ModalController)
  {
    super();
    this.cart.initBonusData();
    this.getPmtMethods();
  }


  async getPmtMethods () {
    let pmt = await this.repo.getPmtMethods();
    pmt.forEach(i => {
        this.pmtMethods.push({isChecked: ((this.cart.pmtMethod) && (this.cart.pmtMethod.id === i.id)), method: i});
      }
    );

    this.dataLoaded = true;
  }

  isAnyOptionSelected(): boolean {
    let res = false;
    for (let item of this.pmtMethods) {
        if (item.isChecked){
          res = true;
          break;
        }
    }
    return res;
  }

  personInfoValid(): boolean {
    return !((this.personInfoEditForm) && (!this.personInfoEditForm.valid));
  }

  validatePage() : boolean {
    if (!this.cart.pmtMethod)
      return false;

    switch (this.cart.pmtMethod.id) {
      case 3: {
        return ((this.isAnyOptionSelected()) && (this.personInfoValid()) && !(this.cart.loan === null));
      }
      default: {
        return this.isAnyOptionSelected();
      }
    }
  }

  onSelectOptionClick(option) {
    if (option.method === this.cart.pmtMethod)
      return;

    for (let i of this.pmtMethods) {
      let match = (i === option);
      i.isChecked = match;

      if (match) {
        this.cart.pmtMethod = option.method;
        if ((this.cart.pmtMethod.id === 1) || (this.cart.pmtMethod.id === 2))
          this.cart.loan = null;
      };
    };
  }

  onShowCreditCalculatorClick() {
    let calcModal = this.modalCtrl.create(CreditCalcPage, {quotProduct: null});
    calcModal.present();
  }

  onContinueClick() {
    this.navCtrl.push('BalancePage', {checkoutMode: true});
  }

  onApplyPromoCodeClick() {
    console.log('ApplyPromoCode click.. ');
  }
}
