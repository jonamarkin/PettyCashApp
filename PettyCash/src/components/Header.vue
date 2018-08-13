<template>
	<div class="ui secondary menu z-depth-1 top-nav ">
		<div class="left menu"> 
      <!-- <a class="ui item" is="sui-image"
      href=""
      src="../assets/blacklogo.png"
      ></a> -->
    
      <a href=""><img src="../assets/img/icons/logo1.png" width="90px" height="50" style="padding-left:10px; padding-top:10px;"></a>
    </div>
		<div class="right menu">
			<!-- <a class="ui item"><sui-button positive fluid @click="onLogin">LOGOUT</sui-button></a> -->
      <a class="ui item" @click="signOut"><span style="color:white;">LOGOUT<i class="arrow alternate circle right outline icon"></i></span></a>
		</div>
	</div>
</template>


<script>
export default {
  name: 'Header',
  data () {
    return {
     
    }
  },
  methods:{
    
    signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  
  // window.signOut()
  

      this.$router.push({name: 'login'}); 
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logo{
  width: 80px;
}

</style>
