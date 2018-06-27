<template>
  <div class="login">
    <h1>Petty<b>Cash</b></h1>
    <div class="plogin">
      <!-- <span class="glyphicon glyphicon-user"></span> -->
      <p><img  style="width:50px;" src="../assets/profile.png"></p>
      <p>LOGIN</p>
    </div>
    <button class="btn btn-default"  @click="onLogin"><img style="width:20px;" src="../assets/google logo.jpg">Sign in with Google</button>

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  text-align: center;
  vertical-align: middle;
  margin: 150px 0 800px 300px;
  box-shadow: 3px 3px 3px 3px grey;
  width:50%;
  height:400px;
  font-family: 'Gotham' 'Times New Roman', Times, serif;
  background: #f6f6f6;
}
h1{
  padding-top:50px;
}
button{
  margin-top:50px;
  border: 1px solid black;
  background: transparent;
  outline: none;
}
button:hover{
  background:#1875D2;
  color: white;
  border: none;
}

.plogin{
  margin-top: 70px;
  font-weight: bold;
}

</style>
