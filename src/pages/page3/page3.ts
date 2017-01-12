import { Component } from '@angular/core';
import { ItemPage } from '../item-page/item-page';
import { AddItemPage } from '../add-item-page/add-item-page';
import { NavController, NavParams, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  cards: Array<{header: string, text: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

    this.cards = [];
    for (let i = 1; i < 9; i++) {
      this.cards.push({
        header: 'Header ' + i,
        text: 'This is the card #' + i + ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam augue eros, suscipit eu aliquam eu, porta at massa. Morbi viverra, leo vel viverra dignissim, orci neque pellentesque urna, ut vestibulum lacus quam eu diam. Donec imperdiet urna ut enim posuere pharetra.'
      });
    }
  }

  itemTapped(event, header, text) {
    // open the item details page
    this.navCtrl.push(ItemPage, {
      title: header,
      note: text
    });
  }

  addCard(){
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((card) => {
          if(card){
            this.saveItem(card);
          }
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.cards.push({
        header: item.title,
        text: item.note,
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3Page');
  }

}
