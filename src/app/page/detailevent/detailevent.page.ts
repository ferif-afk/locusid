import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailevent',
  templateUrl: 'detailevent.page.html',
  styleUrls: ['detailevent.page.scss']
})
export class DetailEventPage {

  datadetail : any;
  
  constructor(private act : ActivatedRoute, private rtr : Router) { 
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.idevent;
    }
    console.log(this.datadetail)
  }

}
