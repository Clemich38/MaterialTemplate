import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-page',
  templateUrl: 'item-page.html'
})
export class ItemPage {
  title: string;
  note: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    // Get the item passed as a parameter
    this.title = navParams.get('title');
    this.note = navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPagePage');
  }

}
