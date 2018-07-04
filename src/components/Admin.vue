<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
          <span class="petty">Petty<b>Cash</b></span>
      <form>
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="fa fa-search w3-large" style="padding-top:5px;"></i>
            </button>
          </div>
          <input type="text" class="form-control" placeholder="Search" style="height:38px; margin-top:1px;"> 
        </div>
      </form>
    </div>
    <div class="col-md-1 side" >
      <nav  class="col-md-12 side-nav">
          <span style="font-size:30px;cursor:pointer margin-left:5px;" onclick="openNav()"></span><br/>
         <a href="#" @click="currentView='Requests'"><i class="far fa-envelope"  style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px;cursor:pointer;"><b>Requests</b></span></a>
         <a href="#"><i class="fas fa-address-book " style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px;cursor:pointer;"><b>Contacts</b></span></a>
         <a href="#"><i class="fas fa-money-bill" style="font-size:30px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Payments</b></span></a>
         <a href="#"><i class="fas fa-cog" style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Settings</b></span></a>
         <a href="#"><i class="fas fa-headphones" style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Help</b></span></a>
      </nav>
   </div>
   <!-- <div class="col-md-11"
    <component is="currentView"></component>
   </div> -->

   
  </div>

  </div> 




  


</template>

<script>
export default {
    data: {
        currentView: Requests
    },
    methods:{
    // NewRequest() {
    //   this.$router.push({name: 'PettyForm'}); 
    // },
    }
}
</script>
<style scoped>

.petty{
  margin-left:3px;
  font-size:1.8em;
  
}

.side-nav{
  background:#67aee6;
  height:500px;
  margin:0;
  text-align: justify;
  font-family:Gotham;
  font-size: 0.7em;
  width:70px;
}

.side-nav a{
    text-decoration: none;
}
</style>
