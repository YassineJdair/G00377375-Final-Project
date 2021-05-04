import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XrpPageRoutingModule } from './xrp-routing.module';

import { XrpPage } from './xrp.page';
import { XrpinfoPageModule} from '../xrpinfo/xrpinfo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XrpPageRoutingModule,
    XrpinfoPageModule
  ],
  declarations: [XrpPage]
})
export class XrpPageModule {}
