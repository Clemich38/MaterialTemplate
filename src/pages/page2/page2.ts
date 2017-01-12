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

    // Let's pick some icon to ad in the list items
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    // Populate the list
    this.items = [];
    for (let i = 1; i < 15; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        // Add one random icon
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  // open the item details page
  itemTapped(event, title, note) {
    this.navCtrl.push(ItemPage, {
      title: title,
      note: note
    });
  }

  // Display the addItem modal page
  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
 
    addModal.present();
 
  }
 
  // Add the new item to the list
  saveItem(item){
    this.items.push({
        title: item.title,
        note: item.note,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
  }
}
