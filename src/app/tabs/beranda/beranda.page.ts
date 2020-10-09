import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-beranda',
  templateUrl: 'beranda.page.html',
  styleUrls: ['beranda.page.scss']
})
export class BerandaPage {
  nama;
  email;
  noWa;
  pesan;

	bannerSlide = {
    // initialSlide: 0,
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.4,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
    },
  };

  promoSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3.4,
    centeredSlides: true,
    loop: true
  };

  eventSlide = {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 3.4,
    centeredSlides: true,
    loop: true
  };

  isLoading = false;

  ResponseData:any;
  getSlider:any;
  getPromo:any;
  getEvent:any;
  getGaleri:any;

  constructor(public api: AuthServiceService, public loadingController: LoadingController, private router: Router) {} 

  ionViewWillEnter(){
    this.DataSlider();
    this.DataPromo();
    this.DataEvent();
    this.DataGaleri();
  }

  async DataSlider() {   
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
    });
    await loading.present();  
    await this.api.Get_Data('getSlider')
      .subscribe(res => {
        this.ResponseData=res;
        if(this.ResponseData.getSlider){
          this.getSlider=this.ResponseData.getSlider;
          loading.dismiss();
        }
        else{ 
          this.getSlider='';
          loading.dismiss();
       }         
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async DataPromo() {   
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
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

  openDetailPromo(id_promo){
    let navExtras : NavigationExtras = {
      state : {
        idpromo : id_promo,
      }
    };
    this.router.navigate(['detailpromo'], navExtras);
  }

  async DataEvent() {   
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
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

  openDetailEvent(id_event){
    let navExtras : NavigationExtras = {
      state : {
        idevent : id_event,
      }
    };
    this.router.navigate(['detailevent'], navExtras);
  }

  async DataGaleri() {   
    const loading = await this.loadingController.create({
      spinner: 'dots',
      message: "Please wait...",
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

  openDetailGaleri(id_galeri){
    let navExtras : NavigationExtras = {
      state : {
        idgaleri : id_galeri,
      }
    };
    this.router.navigate(['detailgaleri'], navExtras);
  }

  survey(){
    
  }

}
