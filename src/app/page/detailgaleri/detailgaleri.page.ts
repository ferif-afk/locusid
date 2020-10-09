import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailgaleri',
  templateUrl: 'detailgaleri.page.html',
  styleUrls: ['detailgaleri.page.scss']
})
export class DetailGaleriPage {

  datadetail : any;
  
  constructor(private act : ActivatedRoute, private rtr : Router) { 
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.idgaleri;
    }
    console.log(this.datadetail)
  }

}
