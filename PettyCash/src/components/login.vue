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
              <g-signin-button class="ui button googlelog"
                :params="googleSignInParams"
                @success="onSignInSuccess"
                @error="onSignInError">
                SIGN IN WITH GOOGLE
              </g-signin-button>
            </div>
              
              <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
              <!-- <a href="#" @click="signOut">Sign out</a> -->

              <!-- // <button class="ui button googlelog" @click="onLogin">LOGIN WITH GOOGLE</button> -->
            
          </div>

          <div class="inline fields">
                <label>Select Role</label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="frequency" type="radio" v-model="role" value="Admin">
                    <label>Admin</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="frequency" type="radio" v-model="role" value="Finance">
                    <label>Finance</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input name="frequency" type="radio" v-model="role" value="User">
                    <label>User</label>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
   name: 'login',
  data () {
    return {
        role:"",
        googleSignInParams: {
        client_id: '1080232845509-ak73dtp4lnia9lu778039uvh7el8pn1o.apps.googleusercontent.com'
      }
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
      // var provider = new firebase.auth.GoogleAuthProvider()
      
},

// signOut() {
//     window.signOut()
//   }
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile() // etc etc
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());

     var  token = googleUser.getAuthResponse().id_token;
      var email = profile.getEmail();
      
      axios.post('https://pettycash.nfortics.com/api/Login',{

    
      token:token,
      emai: email
  
});

      // var xhr = new XMLHttpRequest();
      // xhr.open('POST', 'https://pettycash.nfortics.com/api/Login');
      // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // xhr.onload = function() {
      //   console.log('Signed in as: ' + xhr.responseText);
      // };
      // xhr.send('idtoken=' + id_token);
      // xhr.send('email=' + emailAddress);
      
      if(this.role=="Admin"){
      this.$router.push({name: 'AdminDashboard'})
      }
      else if(this.role=="Finance"){
        this.$router.push({name: 'FinanceDash'})
      }
      else if(this.role=="User"){
        this.$router.push({name: 'UserDashboard'})
      }
      else{
        alert('You must select a role');
      }
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    }




  },

  mounted(){
    // function onSignIn(googleUser) {
       
    //   var profile = googleUser.getBasicProfile();
    //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //   console.log('Name: ' + profile.getName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // }
  }
}
</script>
<style lang="stylus" scoped>

// .g-signin-button {
//   /* This is where you control how the button looks. Be creative! */
//   color:#67AEE6!important;
// 	font-family:GothamBold!important;
// 	border: 2px solid #67AEE6!important;
// 	background:white!important;
// }

// .g-signin-button:hover{
//   color:white!important;
// 	font-family:GothamBold!important;
// 	background:#67AEE6!important;
// }
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
