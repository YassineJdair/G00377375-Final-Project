import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinancePageRoutingModule } from './binance-routing.module';

import { BinancePage } from './binance.page';
import { BinanceinfoPageModule} from '../binanceinfo/binanceinfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinancePageRoutingModule,
    BinanceinfoPageModule
  ],
  declarations: [BinancePage]
})
export class BinancePageModule {}
