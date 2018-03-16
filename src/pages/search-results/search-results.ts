import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductShort} from '../../app/model/index';
import {SearchService} from '../../app/service/search-service';
import {ComponentBase} from '../../components/component-extension/component-base';


@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage extends ComponentBase implements OnInit {

  public baseProducts = new Array<ProductShort>();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public srchService: SearchService) {
    super();
  }


  onSearchClick() {
    this.navCtrl.push('SearchPage').catch((err: any) => {
      console.log(`Didn't set nav root: ${err}`);
    });
  }

  async ngOnInit() {
    super.ngOnInit();
    this.baseProducts = await this.srchService.searchResults;
  }


}
