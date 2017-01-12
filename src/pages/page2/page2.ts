import { Component } from '@angular/core';
import { ItemPage } from '../item-page/item-page';
import { AddItemPage } from '../add-item-page/add-item-page';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 15; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, title, note) {
    // open the item details page
    this.navCtrl.push(ItemPage, {
      title: title,
      note: note
    });
  }

  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push({
        title: item.title,
        note: item.note,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
  }
}
