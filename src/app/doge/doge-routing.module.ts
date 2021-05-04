import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogePage } from './doge.page';

const routes: Routes = [
  {
    path: '',
    component: DogePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogePageRoutingModule {}
