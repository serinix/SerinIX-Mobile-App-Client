import {Component} from '@angular/core';
import {Nav, Platform, MenuController, IonicPage} from 'ionic-angular';
import {ComponentBase} from "../../components/component-extension/component-base";
import {AbstractDataRepository} from "../../app/service";

@IonicPage({name: 'BarcodePage'})
@Component({
  templateUrl: 'barcode.html'
})
export class BarcodePage extends ComponentBase {

  createdCode = null;

  constructor(private platform: Platform, private nav: Nav,
              public menuCtrl: MenuController, private repo: AbstractDataRepository) {
    super();
    //this.rootPage = HomePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  ionViewDidLoad() {
    this.createCode();
  }

  async ngOnInit() {
    super.ngOnInit();
    if (!this.userService.isAuth && this.userService.isNotSignOutSelf()) {
      await this.userService.shortLogin();
    }
  }

  createCode() {
    try {
      const id: string = localStorage.getItem('id');
      if (!id) {
        return false;
      }
      this.repo.getClientByUserId(+id).then(client => {
        this.createdCode = client.barcode;
      });
    } catch (err) {
      console.log(`Error creating barcode: ${err}`);
      this.nav.pop().catch(err => {
        console.log(`Can\'t go back: ${err}`);
        return;
      });
    }
  }

}

