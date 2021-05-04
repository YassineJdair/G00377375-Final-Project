import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinanceinfoPage } from './binanceinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BinanceinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinanceinfoPageRoutingModule {}
