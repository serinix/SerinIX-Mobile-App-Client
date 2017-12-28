import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdersPage } from './your-orders';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    OrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdersPage),
    ComponentsModule
  ],
  exports: [
    OrdersPage
  ]
})
export class OrdersPageModule {}
