import {Component, Input} from '@angular/core';
import {ProductShort} from '../../app/model/index';
import {ComponentBase} from '../component-extension/component-base';

@Component({
  selector: 'items-list',
  templateUrl: 'items-list.html'
})

export class ItemsListComponent extends ComponentBase {

  @Input() productsShort: ProductShort[];

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
