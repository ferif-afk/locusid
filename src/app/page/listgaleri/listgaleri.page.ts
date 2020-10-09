import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listgaleri',
  templateUrl: 'listgaleri.page.html',
  styleUrls: ['listgaleri.page.scss']
})
export class ListGaleriPage {

  ResponseData:any;
  getGaleri:any;
  
  constructor(public api: AuthServiceService, public loadingController: LoadingController, private router: Router) { }

  ionViewWillEnter(){
    this.DataGaleri();
  }

  async DataGaleri() {   
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();  
    await this.api.Get_Data('getGaleri')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.getGaleri){
          this.getGaleri=this.ResponseData.getGaleri;
          loading.dismiss();
        }
        else{ 
          this.getGaleri='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  openDetail(id_galeri){
    let navExtras : NavigationExtras = {
      state : {
        idgaleri : id_galeri,
      }
    };
    this.router.navigate(['detailgaleri'], navExtras);
  }

}
