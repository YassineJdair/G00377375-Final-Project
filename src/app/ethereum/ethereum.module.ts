import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EthereumPageRoutingModule } from './ethereum-routing.module';

import { EthereumPage } from './ethereum.page';
import { EthereuminfoPageModule} from '../ethereuminfo/ethereuminfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EthereumPageRoutingModule,
    EthereuminfoPageModule
  ],
  declarations: [EthereumPage]
})
export class EthereumPageModule {}
