<template>
<div class="container">
  <div class="login">
    <h3 style="margin-top:10px;"><b>Petty</b>Cash</h3>
     <p><img class="profile" src="../assets/loginprof.png"></p>
           <div class="sublogin">
             <p style="color:white; padding-top:40px;">Welcome</p>
            <button class="btn btn-default" @click="onLogin"><img style="width:20px;" src="../assets/google.jpg"><small>LOGIN WITH GOOGLE</small></button>
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
  width:600px;
  border: 1px solid #67AEE6;
  margin-left: 20%;
  height: 400px;
  text-align: center;
  color: #67AEE6;
  border-radius: 20px;
}
button{
  background:white; 
  color: #67AEE6;
  margin-top: 50px;
  border-radius: 20px;
  width:50%;
}

.sublogin{
  height: 220px;
  width:70%;
  background: #67AEE6;
  margin-left: 15%;
  border-radius: 5px;
}
/* img{
  border-radius: px;
  border: 2px solid #67AEE6;
} */
.profile{
  background: white;
  padding-bottom: 0;
   /* padding-top: -25px; */
  }
</style>

