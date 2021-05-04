import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinanceinfoPageRoutingModule } from './binanceinfo-routing.module';

import { BinanceinfoPage } from './binanceinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinanceinfoPageRoutingModule
  ],
  exports: [BinanceinfoPage],
  declarations: [BinanceinfoPage]

})
export class BinanceinfoPageModule {}
