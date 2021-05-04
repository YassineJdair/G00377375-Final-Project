import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EthereuminfoPageRoutingModule } from './ethereuminfo-routing.module';

import { EthereuminfoPage } from './ethereuminfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EthereuminfoPageRoutingModule
  ],
  exports: [EthereuminfoPage],
  declarations: [EthereuminfoPage]
})
export class EthereuminfoPageModule {}
