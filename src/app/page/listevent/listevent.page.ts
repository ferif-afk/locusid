import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listevent',
  templateUrl: 'listevent.page.html',
  styleUrls: ['listevent.page.scss']
})
export class ListEventPage {

  ResponseData:any;
  getEvent:any;
  
  constructor(public api: AuthServiceService, public loadingController: LoadingController, private router: Router) { }

  ionViewWillEnter(){
    this.DataEvent();
  }

  async DataEvent() {   
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();  
    await this.api.Get_Data('getEvent')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.getEvent){
          this.getEvent=this.ResponseData.getEvent;
          loading.dismiss();
        }
        else{ 
          this.getEvent='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  openDetail(id_event){
    let navExtras : NavigationExtras = {
      state : {
        idevent : id_event,
      }
    };
    this.router.navigate(['detailevent'], navExtras);
  }

}
