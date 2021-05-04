import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XrpinfoPageRoutingModule } from './xrpinfo-routing.module';

import { XrpinfoPage } from './xrpinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XrpinfoPageRoutingModule
  ],
  exports: [XrpinfoPage],
  declarations: [XrpinfoPage]
})
export class XrpinfoPageModule {}
