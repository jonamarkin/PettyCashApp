<template>
<div class="container">
  <div class="login">
    <h3 style="margin-top:30px;"><b>Petty</b>Cash</h3>
     
           <div class="sublogin">
             <div><img class="profile" src="../assets/login.png"></div>
             <p style="color:white; font-weight:bold;">Welcome</p>
            <button class="btn btn-default" @click="onLogin"><img style="width:20px; margin-right:5px;" src="../assets/google.jpg"><small>LOGIN WITH GOOGLE</small></button>
        </div>
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
      this.$router.push({name: 'Userdashboard'}); 
}
  }
}
</script>

<style scoped>
.container{
  width: 80%;
  height: 800px;
  margin-top: 100px;
}
.login{
  width:800px;
  border: 2px solid #A9D1F0;
  margin-left: 10%;
  height: 500px;
  text-align: center;
  color: #67AEE6;
  }
button{
  background:white; 
  color: #67AEE6;
  margin-top: 50px;
  border-radius: 20px;
  width:50%;
  cursor: pointer;
}


.sublogin{
  height: 250px;
  width:70%;
  background: #67AEE6;
  margin-left: 15%;
  margin-top: 100px;
}
/* img{
  border-radius: px;
  border: 2px solid #67AEE6;
} */
.profile{
  position:relative; 
  top:-40px; 
  z-index:2;
  width:80px;
  /* border-radius: 100%; */
}
</style>

