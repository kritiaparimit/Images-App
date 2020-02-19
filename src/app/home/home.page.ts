import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  dataFromService: any = "";
  url: any = "../../assets/data.json";
  constructor(public http: HttpClient, private toastController: ToastController) {}

  ngOnInit(){
    this.GetImages();
  }
  
  async GetImages(){
  
   this.ParseData().subscribe((dataReturnFromService) => {
   this.dataFromService = JSON.stringify(dataReturnFromService);
   console.log(this.dataFromService);
   }, error => { console.log('oops', error);
  this.GetToast('Something went Wrong');
  });
  }
  async GetToast(text){
    const toast = await this.toastController.create ({
      message: text,
      duration: 3000

    });
    console.log(toast);
    toast.present();
   }
   ParseData(): Observable<any> {
    console.log('get json');
    return this.http.get(this.url);
}
}       
