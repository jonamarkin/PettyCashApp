<template>
<div class="ui container u-full-width u-full-height cover">
  <div  class="logo">
    <img src="../assets/pettylogo.png">
  </div>

  <div class="ui center aligned container font-login welcome">
    <div class="ui container">
      <h1><span class="font-welcome">Welcome</span><br>
      <span class="font-login">Login to access your account</span></h1>
    </div>
    <div class="ui hidden divider"></div> 
    <button @click="onLogin" class="ui huge inverted download button"><i class="red google icon"></i>LOGIN WITH GOOGLE</button>
  </div>

</div>
</template>
<script>
export default {
   name: 'login',
  data () {
    return {
     
    }
  },
  methods:{
    onLogin() {
      
      this.$router.push({name: 'UserDashboard'}); 
}
  }
}
</script>
<style lang="stylus" scoped>
.font-login{
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
  font-size:40px;
  color: rgba(255, 255, 255, 1);
  line-height: 1.2;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-weight:normal!important;

}
.font-welcome{
 font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
 font-size:80px; 
 color: rgba(255, 255, 255, 1);
 line-height: 1.2;
 text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

}
.cover{
    background: url("../assets/b3.jpeg") center;
    height: 100%;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.welcome{
  padding-top:14%;
  padding-bottom:20%;
}
button{
  img{
    width:20px!important;
    border-radius:100%;
  }
}
.logo{
position: fixed;
top: 0px;
z-index: 900;
left: 0%;
padding: 2em 0em;
width: 100%;
box-shadow: 0px 0px 0px 0px transparent;
// border-bottom: 1px solid wheat;
img{
  width:120px!important;
  margin-left:50px;
}
}
.vertical footer{
  border 2px solid wheat
}
</style>
