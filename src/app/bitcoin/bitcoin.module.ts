import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoinPageRoutingModule } from './bitcoin-routing.module';

import { BitcoinPage } from './bitcoin.page';
import { BitcoininfoPageModule} from '../bitcoininfo/bitcoininfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoinPageRoutingModule,
    BitcoininfoPageModule
  ],
  declarations: [BitcoinPage]
})
export class BitcoinPageModule {}
