import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';


@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {

  title;
  note;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {}

  saveItem(){
 
    let newItem = {
      title: this.title,
      note: this.note
    };
 
    this.view.dismiss(newItem);
 
  }
 
  close(){
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

}
