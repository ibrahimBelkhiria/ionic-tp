import { Component } from '@angular/core';
import {DateTime, NavController} from 'ionic-angular';
import firebase from 'firebase';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {User} from "../../app/User";
import {Message} from "../../app/Message";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chatUser:any=null;

  messageText:string;
  items: Observable<any[]>;
  private user = new User();
  private  message = new Message();

  messages: AngularFireList<any>;
  constructor(public navCtrl: NavController,afDB: AngularFireDatabase) {
    firebase.auth().onAuthStateChanged(user=>{
        if(user) {
          this.chatUser = user;
        }else {
          this.chatUser = null;
        }
    });

  this.messages =  afDB.list('/message');


  }

  login():void {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(()=>{
        firebase.auth().getRedirectResult().then(result=>{
          var user = result.user;
        }).catch(function(error) {
          console.log(error);
        });


    });

  }


logout():void {

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signOut().then(function() {
    console.log("logout succesfully");
  },function(error){
    console.log(error);
  });


}


  sendMessage() {

      this.user.displayName = this.chatUser.displayName;
      this.user.photUrl = this.chatUser.photoURL;
      this.user.email = this.chatUser.email;

      this.message.text = this.messageText;
      this.message.user= this.user;
      this.message.date = new Date().getTime();



      console.log(this.messageText);
      this.messages.push(this.message);


  }
}
