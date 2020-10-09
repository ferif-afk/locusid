import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listpromo',
  templateUrl: 'listpromo.page.html',
  styleUrls: ['listpromo.page.scss']
})
export class ListPromoPage {

  ResponseData:any;
  getPromo:any;
  
  constructor(public api: AuthServiceService, public loadingController: LoadingController, private router: Router) { }

    ionViewWillEnter(){
      this.DataPromo();
    }
  
    async DataPromo() {   
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();  
      await this.api.Get_Data('getPromo')
        .subscribe(res => {
          this.ResponseData=res;
          if(this.ResponseData.getPromo){
            this.getPromo=this.ResponseData.getPromo;
            loading.dismiss();
          }
          else{ 
            this.getPromo='';
            loading.dismiss();
         }         
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }

    openDetail(id_promo){
      let navExtras : NavigationExtras = {
        state : {
          idpromo : id_promo,
        }
      };
      this.router.navigate(['detailpromo'], navExtras);
    }

}
