import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public chatUser:any=null;


  constructor(public navCtrl: NavController) {
    firebase.auth().onAuthStateChanged(user=>{
        if(user) {
          this.chatUser = user;
        }else {
          this.chatUser = null;
        }


    });
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







}
