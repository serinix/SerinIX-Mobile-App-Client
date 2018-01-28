import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BalancePage } from './balance';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    BalancePage,
  ],
  imports: [
    IonicPageModule.forChild(BalancePage),
    ComponentsModule
  ],
  exports: [
    BalancePage
  ]
})
export class BalancePageModule {}
