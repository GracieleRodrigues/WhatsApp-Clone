import firebase from "firebase";
import "firebase/auth";
import 'firebase/firestore';

export class Firebase {

    constructor(){

        this._config = {

            
                apiKey: "AIzaSyBR9DBgHv7FpvnKlPD8VCSBenzaQLRONuQ",
                authDomain: "whatsapp-clone-ce6c1.firebaseapp.com",
                projectId: "whatsapp-clone-ce6c1",
                storageBucket: "whatsapp-clone-ce6c1.appspot.com",
                messagingSenderId: "729770596783",
                appId: "1:729770596783:web:bdd696c2a6cdbd0da5b75a",
                measurementId: "G-H9MYG8TZLE"
                
              };

        this.init();
    }

    init(){

        if (!window._initializedFirebase) {
            
            firebase.initializeApp(this._config);
            firebase.firestore().settings({
                timestampsInSnapshots: true
            });
            window._initializedFirebase = true;
        }
    }
 
    static db() {
        return firebase.firestore();
    }
 
    static hd() {
        return firebase.storage();
    }
 
    initAuth(){
 
        return new Promise((s, f)=>{
            let provider = new firebase.auth.GoogleAuthProvider();
           
            firebase.auth().signInWithPopup(provider).then(function (result) {
                
                var token = result.credential.accessToken;
                var user = result.user;
               
                s({
                    user,
                    token
                });
               
            }).catch(function (error) {
               
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                f(error);
                
            });
            
        });
 
    }
 
}