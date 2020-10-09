import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detailmember",
  templateUrl: "./detailmember.page.html",
  styleUrls: ["./detailmember.page.scss"],
})
export class DetailmemberPage implements OnInit {
  datadetail: any;

  constructor(private act: ActivatedRoute, private rtr: Router) {
    if (this.rtr.getCurrentNavigation()) {
      this.datadetail = this.rtr.getCurrentNavigation().extras.state.member;
    }
    console.log(this.datadetail);
  }

  ngOnInit() {}
}
