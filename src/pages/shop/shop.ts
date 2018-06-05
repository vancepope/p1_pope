import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyoutPage } from '../buyout/buyout';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
    var item;
    var count;
  }
  addMilk(item, count){
    item = "Milk";
    count = 0;
    this.navCtrl.push(BuyoutPage,{
      'value': item,
      'count': count + 1
    })
  }
  addEggs(item, count){
    item = "Eggs";
    count = 0
    this.navCtrl.push(BuyoutPage,{
      'value': item,
      'count': count + 1
    })
  }
  addFlour(item, count){
    item = "Flour";
    count = 0;
    this.navCtrl.push(BuyoutPage,{
      'value': item,
      'count': count + 1
    })
  }
}
