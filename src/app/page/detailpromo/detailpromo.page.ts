import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailpromo',
  templateUrl: 'detailpromo.page.html',
  styleUrls: ['detailpromo.page.scss']
})
export class DetailPromoPage {

  datadetail : any;
  
  constructor(private act : ActivatedRoute, private rtr : Router) { 
      if (this.rtr.getCurrentNavigation()) {
        this.datadetail = this.rtr.getCurrentNavigation().extras.state.idpromo;
      }
      console.log(this.datadetail)
    }

}
