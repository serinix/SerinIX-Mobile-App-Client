import {RefInjector, LazyLoad} from '../core/app-core';
import {Manufacturer, ProductPropValueShort, Product} from '../model/index';
import {AbstractDataRepository} from '../service/index';


@LazyLoad([
  { options:{constructor: Manufacturer}, action: 'getManufacturerById', params: ['mnfId']},
  { options:{constructor: Product}, action: 'getProductById', params: ['id']},

])
export class ProductShort {
  private _repo: AbstractDataRepository;
  constructor(public id?: number,
              public name?: string,
              public price?: number,
              public oldPrice?: number,
              public bonuses?: number,
              public mnfId?: number,
              public props?: ProductPropValueShort[],
              public imageUrl?: string,
              public rating: number = 0,
              public recall: number = 0,
              public supplOffers: number = 1
  )  { this._repo = RefInjector.pull(AbstractDataRepository);}
}
