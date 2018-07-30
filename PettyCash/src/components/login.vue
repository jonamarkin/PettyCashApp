<template>
<div class="light-grey center aligned page">
  <div class="ui container min-height-100 " style="padding-top:14vh;">
    <div class="ui grid no-margin center aligned  min-height-70">
        <div class="ten wide column z-depth-1 no-padding left-log ">
          <!-- <div class="left-content"> -->
            <!-- <div class="petty"><b>PettyCash</b></div>
            <div class="platform"><i class="lightbulb icon"></i> A platform for petty cash management</div>
            <div class="ui horizontal divider"></div>
            <div class="ui horizontal divider"></div>
            <div class="ui list can-do">
              <div class="item"><i class="arrow alternate circle up icon"></i> Make Cash Requests</div>
              <div class="item"><i class="chart pie icon"></i> Manage Cash Requests</div>
              <div class="item"><i class="reply all icon"></i> Make Cash Payments</div>
            </div> -->
          <!-- </div> -->
        <!-- <div class="ten wide column no-padding center aligned" style="background:white;"> -->
          <div class="right-content">
            <div class="welcome">WELCOME</div>
            <div class="login">Login to access your account</div>
            <div class="ui horizontal divider"></div>
            <div class="ui horizontal divider"></div>
            <div class="ui horizontal divider"></div>
            <div>
              <button class="ui button googlelog" @click="onLogin">LOGIN WITH GOOGLE</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
var config = {
    apiKey: "AIzaSyDCyy6nEpMQtfI10RxqtUC57M5ZhFrH9oM",
    authDomain: "pettycashapp.firebaseapp.com",
    databaseURL: "https://pettycashapp.firebaseio.com",
    projectId: "pettycashapp",
    storageBucket: "pettycashapp.appspot.com",
    messagingSenderId: "426531209581"
  };
  firebase.initializeApp(config);
import firebase from 'firebase'

export default {
   name: 'login',
  data () {
    return {
        role: "finance"
    }
  },
  methods:{
    onLogin() {
      this.$router.push({name:'UserDashboard'})
      // if (this.role=="admin") {
      //   this.$router.push({name: 'AdminDashboard'})
      // }
      // else if(this.role == "finance"){
      //   this.$router.push({name: 'FinanceDash'})
      // }
      // else{
      //   this.$router.push({name: 'UserDashboard'}); 
      // }
      // var provider = new firebase.auth.GoogleAuthProvider();

      // firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // var token = result.credential.accessToken;
      // // The signed-in user info.
      // var user = result.user;

    //     function print_user(user) {
    //     user.providerData.forEach(function (profile) {
    //         console.log("Sign-in provider: "+profile.providerId);
    //         console.log("  Provider-specific UID: "+profile.uid);
    //         console.log("  Name: "+profile.displayName);
    //         console.log("  Email: "+profile.email);
    //         console.log("  Photo URL: "+profile.photoURL);
    //     });
    // }

    // firebase.auth().onAuthStateChanged(user => {
    //   if(user) {
    //     window.location = 'UserDashboard'; //After successful login, user will be redirected to home.html
        
    //   }
    // });

      // console.log(result.user);
      // if(user){
      //   this.$router.push({name: 'FinanceDash'})
      // }
      
      // ...
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    
      
},


  }
}
</script>
<style lang="stylus" scoped>
// .font-login{
//   font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
//   font-size:40px;
//   color: rgba(255, 255, 255, 1);
//   line-height: 1.2;
//   text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
//   font-weight:normal!important;

// }
// .font-welcome{
//  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
//  font-size:80px; 
//  color: rgba(255, 255, 255, 1);
//  line-height: 1.2;
//  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

// }
// .cover{
//     background: url("../assets/b3.jpeg") center;
//     height: 100%;
//     width:100%;
//     background-position: center;
//     background-repeat: no-repeat;
//     background-size: cover;
// }
// .welcome{
//   padding-top:14%;
//   padding-bottom:20%;
// }
// button{
//   img{
//     width:20px!important;
//     border-radius:100%;
//   }
// }
// .logo{
// position: fixed;
// top: 0px;
// z-index: 900;
// left: 0%;
// padding: 2em 0em;
// width: 100%;
// box-shadow: 0px 0px 0px 0px transparent;
// // border-bottom: 1px solid wheat;
// img{
//   width:120px!important;
//   margin-left:50px;
// }
// }
// .vertical footer{
//   border 2px solid wheat
// }
</style>
