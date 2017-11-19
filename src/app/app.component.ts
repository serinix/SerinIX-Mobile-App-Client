import { Component, ViewChild, OnInit } from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AbstractDataRepository} from "./service/index";

import {
  AboutPage,
  AccountPage,
  HomePage,
  SupportPage,
  LoginPage,
  CategoriesPage,
  MapPage,
  MyOrderPage
} from '../pages/index';
import {UserService} from "./service/bll/user-service";

export interface PageInterface {
  title: string;
  name?: string;
  component: any;
  icon?: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class FoxApp implements OnInit{
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  appPages = [
    {title: 'Главная', name: 'Home', component: HomePage, index: 0, icon: 'home'},
    {title: 'Категории', name: 'Categories', component: CategoriesPage, index: 1, icon: 'list'},
    {title: 'Ваши Заказы', name: 'Orders', component: MyOrderPage, index: 2, icon: 'cart'},
    {title: 'Ваш Аккаунт', name: 'Account', component: AccountPage, index: 3, icon: 'person'},
  ];
  infoPages = [
    {title: 'Магазины на карте', name: 'Map', component: MapPage, index: 0, icon: 'ios-map-outline'},
    {title: 'О нас', name: 'About', component: AboutPage, index: 1, icon: 'information-circle'},
    {title: 'Поддержка', name: 'Support', component: SupportPage, index: 2, icon: 'text'}
  ];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private repo: AbstractDataRepository, public account: UserService) {
    this.rootPage = HomePage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  async ngOnInit() {
    if(!this.account.isAuth && this.account.isNotSignOutSelf()){
      await this.account.shortLogin();
    }

  }

  openPage(page: PageInterface) {

    if ((this.account.isAuth === false) && (page.component === AccountPage)) {
      this.nav.setRoot(LoginPage).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    } else {
      this.nav.setRoot(page.component).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    /*if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }*/
  }

  signOut() {
    this.account.logOut();
  }
}

