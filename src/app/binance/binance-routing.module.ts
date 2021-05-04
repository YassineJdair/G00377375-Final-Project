import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinancePage } from './binance.page';

const routes: Routes = [
  {
    path: '',
    component: BinancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinancePageRoutingModule {}
