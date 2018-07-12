<template>
  
<div class="ui container">
  <div class="ui middle aligned center aligned grid container z-depth">
  <div style="background:#F4F4F4;" class="column six wide">
    <p><img class="ui small centered circular image profile profile-image" src="../assets/img/users/usericon.png"></p>
    <p><button class="ui basic grey button rounded "><img class="google"  src="../assets/google logo.jpg"> Login With Google</button></p>
  </div>
  <div style="background:#F1F1F1;" class="column ten wide">
   
   <p class="welcome"><span style="font-size:50px;">Welcome</span><br>
   <span>Login to access your account</span></p>
   
  </div>
</div>
<!-- </div> -->


</div>
</template>

<script>
export default {
  name: 'ColumnsExample',
};
</script>
<style lang="stylus" scoped>
.ui.grid {
    margin-top: 100px;
    margin-bottom: 100px;
}
.column{
  height: 450px!important;
 p{
     margin-top:80px;
     }
  }
  .welcome{
    margin-top:200px!important;
  }
.google{
  width 15px
  background transparent
  border-radius 100%
  margin-right 5px
}
</style>

