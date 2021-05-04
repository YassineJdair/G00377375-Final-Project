import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EthereuminfoPage } from './ethereuminfo.page';

const routes: Routes = [
  {
    path: '',
    component: EthereuminfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EthereuminfoPageRoutingModule {}
