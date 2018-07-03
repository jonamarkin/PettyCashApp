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
        <a href="/Requests" @click="currentView='Requests'"><i class="far fa-envelope"  style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
        <span style="margin-right:5px;cursor:pointer;"><b>Requests</b></span></a>
         <a href="#" @click="currentView='Requests'"><i class="fas fa-address-book " style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px;cursor:pointer;"><b>Contacts</b></span></a>
         <a href="#" @click="currentView='Requests'"><i class="fas fa-money-bill" style="font-size:30px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Payments</b></span></a>
         <a href="#" @click="currentView='Requests'"><i class="fas fa-cog" style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Settings</b></span></a>
         <a href="#" @click="currentView='Requests'"><i class="fas fa-headphones" style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
         <span style="margin-right:5px; cursor:pointer;"><b>Help</b></span></a>
      </nav>
   </div>
   <keep-alive>
    <component :is="currentView"></component>
   </keep-alive>
  
  </div>

  </div> 




  


</template>

<script>
export default {

    data: {
    currentView: 'Requests'
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


.topash{
  background:#f2f2f2;
  height:30px;
  margin-top:5px;
}

.side{
    width:70px;
    margin: 0;
}

.right-stuff{
   background:#f4f4f4;
   height:500px;
   text-align: justify;
}

.trans-draw{
    margin-left:10px;
    text-align: center;
}

.trans-items{
    margin-top:10px;
    overflow-y: scroll;
}

hr{
    color:black;
    
}

.request-table{
    max-height: 500px;
    overflow-y: scroll;
}

.adminshow{
    text-align: center;
    background: #f5f5f5;
 
}


.side-nav a{
    text-decoration: none;
}
</style>
