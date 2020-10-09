import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-tentang',
  templateUrl: 'tentang.page.html',
  styleUrls: ['tentang.page.scss']
})
export class TentangPage {

  ResponseData:any;
  getTentang:any;
  
  constructor(public api: AuthServiceService, public loadingController: LoadingController) { }

  ionViewWillEnter(){
    this.DataTentang();
  }

  async DataTentang() {   
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();  
    await this.api.Get_Data('getTentang')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.getTentang){
          this.getTentang=this.ResponseData.getTentang;
          loading.dismiss();
        }
        else{ 
          this.getTentang='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
