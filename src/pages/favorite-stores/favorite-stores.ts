import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ComponentBase} from "../../components/component-extension/component-base";
import {City, Store, User} from "../../app/model";
import {AbstractAccountRepository, AbstractDataRepository} from "../../app/service";

@IonicPage()
@Component({
  selector: 'page-favorite-stores',
  templateUrl: 'favorite-stores.html',
})
export class FavoriteStoresPage extends ComponentBase implements OnInit {

  dataLoaded: boolean;
  stores: Array<{city: City, store: Store}>;
  foxStores: Array<{id: number, stores: Store[]}>;
  cities: City[];

  constructor(private navCtrl: NavController, private navParams: NavParams, private repo: AbstractDataRepository,
              private _account: AbstractAccountRepository, private alertCtrl: AlertController) {
    super();
    this.stores = [];
  }

  async ionViewDidLoad() {
    await this.getCitiesAndFoxStores().catch(err => {
      console.log(`Couldn't retrieve cities and foxStores: ${err}`);
    });
    this.getFavStoresId().then(data => {
        if (data) {
          this.dataLoaded = true;
          let clen = this.cities.length;
          let fslen = this.foxStores.length;
          for (let id of data) {
            for (let i = 0; i < clen; i++) {
              for (let j = 0; j < fslen; j++) {
                for (let k = 0; k < this.foxStores[j].stores.length; k++) {
                  let fstores = this.foxStores[j];
                  if (id === fstores.stores[k].id && fstores.id === this.cities[i].id) {
                    this.stores.push({city: this.cities[i], store: fstores.stores[k]});
                  }
                }
              }
            }
            /*this.getStore(id).then((datai) => {
              this.stores.push(datai);
            }).catch(err => {
              console.log(`Didn't load: ${err}`)
            });*/
          }
        } else {
          console.log(`Didn't load favoriteStoresId from storage`);
          this.navCtrl.pop().catch(err => console.log(`Couldn't go back: ${err}`));
        }
      }
    ).catch(err => {
      console.log(`Error: ${err}`);
      this.navCtrl.pop().catch(err => console.log(`Couldn't go back: ${err}`));
      return;
    });
    if (this.stores === []) {
      this.dataLoaded = false;
    }
  }

  ngOnInit() {
    super.ngOnInit();
  }

  async getCitiesAndFoxStores() {
    try {
      await this.repo.getCities().then(citiesArr => {
        this.cities = citiesArr;
      }).catch(err => {
        console.log(`Error loading cities: ${err}`);
      });
      await this.repo.getFoxStores().then(storesArr => {
        this.foxStores = storesArr;
      }).catch(err => {
        console.log(`Error loading foxStores: ${err}`);
      });
    } catch (err) {
      console.log(`Error loading cities or foxStores: ${err}`);
      this.navCtrl.pop().catch(err => {
        console.log(`Couldn't go back: ${err}`);
      });
    }
  }

  async getFavStoresId(): Promise<number[]> {
    let user: User = await this._account.getUserById(+localStorage.getItem('id'), localStorage.getItem('token'));
    return user.favoriteStoresId;
  }

  getStore(id: number): Store {
    let storeById: Store = null;
    for (let i = 0; i < this.foxStores.length; i++) {
      for (let j = 0; j < this.foxStores[i].stores.length; j++) {
        if(this.foxStores[i].stores[j].id === id) {
          storeById = this.foxStores[i].stores[j];
        }
      }
    }
    /*this.foxStores.forEach(storesArr => {
      storesArr.stores.forEach(store => {
        if(store.id === id) {
          storeById = store;
        }
      })
    });*/
    // return await this.repo.getFoxStoreById(id);
    return storeById;
  }

  onIsPrimaryClick(item: Store) {
    this.stores.forEach(i => {
      i.store.isPrimary = false;
      }
    );
    item.isPrimary = true;
  }

  deleteStore(item: {city: City, store: Store}) {
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Are you sure you want to delete this store from your favorite stores?',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.stores.splice(this.stores.indexOf(item), 1);
            this.userService.removeFavoriteStoresId(item.store.id);
          }
        },
        {
          text: 'Cancel',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

}