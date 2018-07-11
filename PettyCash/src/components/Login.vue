<template>

    <div class="ui centered internally celled grid loginbox">
    <div class="row login">
        <div class="four wide column loginside center aligned ">
        <img class="ui small centered circular image" src="../assets/img/users/usericon.png">
        <button class="ui white button rounded z-depth but"><i class="red google icon"></i> Login With Google</button>
        </div>
        <div class="six wide column pettyside center aligned">
            <h1>Welcome</h1>
            <h3>Login to Access Your Account</h3>
        </div>
    </div>
    </div>

</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbox{
    border: 1px sloid black;
    height: 600px;;
    box-shadow: 5px 10px #888888;
    padding-top:100px;
    padding-bottom:100px;
}
.loginside{
    background: #f4f4f4;
}

.pettyside{
    background:#f1f1f1;
}

login{
    margin-top:50px;
}

.but{
    background: white;
    border-radius:15px;
    border: 1px solid #888888;
}
</style>
