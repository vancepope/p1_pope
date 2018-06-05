import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShopPage} from '../shop/shop';
import {HomePage} from '../home/home';
/**
 * Generated class for the BuyoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  public item = this.navParams.get('value');
  public count = this.navParams.get('count');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }
  goHome(){
    this.navCtrl.popToRoot();
  }
}
