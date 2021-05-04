import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bitcoin',
    loadChildren: () => import('./bitcoin/bitcoin.module').then( m => m.BitcoinPageModule)
  },
  {
    path: 'ethereum',
    loadChildren: () => import('./ethereum/ethereum.module').then( m => m.EthereumPageModule)
  },
  {
    path: 'doge',
    loadChildren: () => import('./doge/doge.module').then( m => m.DogePageModule)
  },
  {
    path: 'xrp',
    loadChildren: () => import('./xrp/xrp.module').then( m => m.XrpPageModule)
  },
  {
    path: 'binance',
    loadChildren: () => import('./binance/binance.module').then( m => m.BinancePageModule)
  },
  {
    path: 'bitcoininfo',
    loadChildren: () => import('./bitcoininfo/bitcoininfo.module').then( m => m.BitcoininfoPageModule)
  },
  {
    path: 'ethereuminfo',
    loadChildren: () => import('./ethereuminfo/ethereuminfo.module').then( m => m.EthereuminfoPageModule)
  },
  {
    path: 'dogeinfo',
    loadChildren: () => import('./dogeinfo/dogeinfo.module').then( m => m.DogeinfoPageModule)
  },
  {
    path: 'xrpinfo',
    loadChildren: () => import('./xrpinfo/xrpinfo.module').then( m => m.XrpinfoPageModule)
  },
  {
    path: 'binanceinfo',
    loadChildren: () => import('./binanceinfo/binanceinfo.module').then( m => m.BinanceinfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
