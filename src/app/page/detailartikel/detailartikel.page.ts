import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detailartikel",
  templateUrl: "detailartikel.page.html",
  styleUrls: ["detailartikel.page.scss"],
})
export class DetailartikelPage {
  datadetail: any;
  datamember: any;

  constructor(private act: ActivatedRoute, private rtr: Router) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.artikel;
      this.datamember = this.rtr.getCurrentNavigation().extras.state.member;
    }
    console.log(this.datadetail);
  }
}
