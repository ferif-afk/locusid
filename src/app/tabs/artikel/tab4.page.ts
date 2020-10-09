import { Component } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { ArtikelService } from "../../services/artikel.service";
import { AlertController } from "@ionic/angular";
import { NgZone } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class Tab4Page {
  ResponseData: any;
  getArtikel: any;
  jsonData: any = [];

  constructor(
    public api: ArtikelService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private zone: NgZone
  ) {}

  ionViewWillEnter() {
    this.DataArtikel();
  }

  async DataArtikel() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
    });
    await loading.present();
    await this.api.Get_Article("getArtikel").subscribe(
      (res) => {
        this.ResponseData = res;
        if (this.ResponseData.getArtikel) {
          this.getArtikel = this.ResponseData.getArtikel;
          loading.dismiss();
        } else {
          this.getArtikel = "";
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  openDetail(id_artikel) {
    let navExtras: NavigationExtras = {
      state: {
        artikel: id_artikel,
      },
    };
    this.router.navigate(["detailartikel"], navExtras);
  }

  dataMember(id_member) {
    let navExtras: NavigationExtras = {
      state: {
        member: id_member,
      },
    };
    this.router.navigate(["detailartikel"], navExtras);
  }

  FilterJSONData(ev: any) {
    this.initializaJSONData();
    const val = ev.target.value;
    if (val && val.trim() != "") {
      this.jsonData = this.jsonData.filter((item) => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  initializaJSONData() {
    this.jsonData = [
      {
        name: "Digital Markerting",
        code: "DM",
      },
      {
        name: "Pengenalan Visual Identity",
        code: "PVI",
      },
      {
        name: "Webinar Desain",
        code: "WD",
      },
      {
        name: "Digital Welbing Festival",
        code: "DWF",
      },
    ];
  }
}
