import { Component } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { MerchantService } from "../../services/merchant.service";
import { AlertController } from "@ionic/angular";
import { NgZone } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  ResponseData: any;
  getPartner: any;
  jsonData: any = [];

  constructor(
    public api: MerchantService,
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
    await this.api.Get_Partner("getPartner").subscribe(
      (res) => {
        this.ResponseData = res;
        if (this.ResponseData.getPartner) {
          this.getPartner = this.ResponseData.getPartner;
          loading.dismiss();
        } else {
          this.getPartner = "";
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  openDetail(id_partner) {
    let navExtras: NavigationExtras = {
      state: {
        partner: id_partner,
      },
    };
    this.router.navigate(["detailmerchant"], navExtras);
  }
}
