import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogeinfoPage } from './dogeinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DogeinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogeinfoPageRoutingModule {}
