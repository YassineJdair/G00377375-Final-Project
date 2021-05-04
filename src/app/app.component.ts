import { Component, OnInit } from '@angular/core';
import { CryptoService } from './Services/crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  crypto:any = [];
  constructor(private service: CryptoService) {


  }

  ngOnInit(){
    this.service.GetCryptoData().subscribe( (data)=> {
      this.crypto = data.crypto;
      console.log(this.crypto)

    } );
  }
  
}
