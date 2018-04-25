import {Component, Input} from '@angular/core';


import firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {Message} from "../../app/Message";

@Component({
  selector: 'message-box',
  templateUrl: 'message-box.html'
})
export class MessageBoxComponent {

  text: string;
  items: Observable<any[]>;
  private messages: Message[];


 //  @Input() messages: Message[];



  constructor(afDB: AngularFireDatabase) {
    console.log('Hello MessageBoxComponent Component');
    this.text = 'Hello World';


    afDB.list('message').valueChanges().subscribe(res=>{
      console.log(res);
      this.messages = res;
    });

    console.log(this.messages);



  }

}
