import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BitcoininfoPageRoutingModule } from './bitcoininfo-routing.module';

import { BitcoininfoPage } from './bitcoininfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BitcoininfoPageRoutingModule
  ],
  exports: [BitcoininfoPage],
  declarations: [BitcoininfoPage]
})
export class BitcoininfoPageModule {}
