import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XrpinfoPage } from './xrpinfo.page';

const routes: Routes = [
  {
    path: '',
    component: XrpinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XrpinfoPageRoutingModule {}
