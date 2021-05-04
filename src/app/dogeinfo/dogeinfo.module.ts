import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogeinfoPageRoutingModule } from './dogeinfo-routing.module';

import { DogeinfoPage } from './dogeinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogeinfoPageRoutingModule
  ],
  exports: [DogeinfoPage],
  declarations: [DogeinfoPage]
})
export class DogeinfoPageModule {}
