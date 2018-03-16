import {MeasureUnit} from './measure-unit';
import {LazyLoad, RefInjector} from '../core/app-core';
import {AbstractDataRepository} from '../service/repository/abstract/abstract-data-repository';

@LazyLoad([
  { options:{constructor: MeasureUnit}, action: 'getMeasureUnitById', params: ['mUnit']}
])
export class ProductPropValueShort {

  private _repo: AbstractDataRepository;

  constructor (
    public idProp: number,
    public pVal?: string,
    public mUnit?: number,
    public idx?: number
  )
  {
    this._repo = RefInjector.pull(AbstractDataRepository);
  }

  public get value(): any
  {
    return this.pVal;
    /*
    if (this.id_Prop.prop_type == 1 ) {
      return this.prop_Value_Str;
    };

    if (this.id_Prop.prop_type == 2 ) {
      return this.prop_Value_Number;
    };

    if (this.id_Prop.prop_type == 3 ) {
      return this.prop_Value_Bool;
    };

    if (this.id_Prop.prop_type == 4 ) {
      return (this.prop_Value_Enum) ? this.prop_Value_Enum.name : null;
    };
    */
  }
}
