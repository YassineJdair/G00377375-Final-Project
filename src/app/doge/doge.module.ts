import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogePageRoutingModule } from './doge-routing.module';

import { DogePage } from './doge.page';
import { DogeinfoPageModule} from '../dogeinfo/dogeinfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogePageRoutingModule,
    DogeinfoPageModule
  ],
  declarations: [DogePage]
})
export class DogePageModule {}
