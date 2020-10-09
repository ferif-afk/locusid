import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { AuthServiceService } from "src/app/auth-service.service";
import { AlertController } from "@ionic/angular";
import { NgZone } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { Observable } from 'rxjs';
import { ListmemberServiceService, SearchType } from 'src/app/services/listmember-service.service';

@Component({
  selector: "app-listmember",
  templateUrl: "./listmember.page.html",
  styleUrls: ["./listmember.page.scss"],
})
export class ListmemberPage implements OnInit {
  ResponseData: any;
  getMember: any;
  jsonData: any = [];
  results: Observable<any>;
  searchTerm ='';
  type: SearchType = SearchType.all;

  constructor(
    public api: AuthServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private zone: NgZone,
    private listmemberService: ListmemberServiceService
  ) {}

  ionViewWillEnter() {
    this.DataMember();
  }

  async DataMember() {
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
    });
    await loading.present();
    await this.api.Get_Data("getMember").subscribe(
      (res) => {
        this.ResponseData = res;
        if (this.ResponseData.getMember) {
          this.getMember = this.ResponseData.getMember;
          loading.dismiss();
        } else {
          this.getMember = "";
          loading.dismiss();
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  searchChanged(){
    this.results = this.listmemberService.searchData(this.searchTerm);
  }

  openDetail(id_member) {
    let navExtras: NavigationExtras = {
      state: {
        member: id_member,
      },
    };
    this.router.navigate(["detailmember"], navExtras);
  }

  ngOnInit() {}
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
        name: "Laila Andana",
        code: "LA",
      },
      {
        name: "Luis Devvi",
        code: "LD",
      },
      {
        name: "Wika Hardiyanto",
        code: "WH",
      },
      {
        name: "Udin",
        code: "U",
      },
      {
        name: "Miftahul Riski",
        code: "MR",
      },
      {
        name: "Milatnia",
        code: "M",
      },
      {
        name: "Yurike",
        code: "Y",
      },
      {
        name: "Pasha Annesa",
        code: "U",
      },
    ];
  }

}
