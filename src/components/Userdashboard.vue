<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
          <span class="petty">Petty<b>Cash</b></span>
      <form>
        <div class="input-group">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
          <input type="text" class="form-control" placeholder="Search"> 
        </div>
      </form>
      <nav class="topash col-md-12">
        <span class="history">REQUESTS</span>
      </nav>
      <nav class="sidenav col-md-1">
        
      </nav>
      

    </div>
  </div>

  </div> 




  


</template>

<script>
export default {
    
    methods:{
    NewRequest() {
      this.$router.push({name: 'PettyForm'}); 
}
  }
}
</script>
<style scoped>
.topnav{
 width:100%;
 height:50px;
 margin-top:10px;
 border:1px solid #d5d5d5;
 
}



.container{

}

.petty{
  margin-left:3px;
  font-size:1.8em;
  
}


.btn{
  margin-bottom: 5px;
  
  margin-left:5px;
}

.right-stuff{
  white-space:normal;
  float:right;
}

.usericon{
  margin-bottom: 5px;
}

.logoutbtn{
  margin:0;
  padding:0;
  border:none;
}

.logoutbtn:hover{
  border:1px solid #cccccc;
}

.new{
  margin-top:5px;
  background:#ff921e;
  color:#ffffff;
  font-weight:bold;
}

.dashboard{
   width:100%;
    height:30px;
    margin-top:5px;
    border:1px solid #d5d5d5;
}

.dash{
  padding-left:5px;
  font-weight:bold;
  font-size:1.2em;
  color:#7157b1;
}

.sidenav{
  background:#67aee6;
  height:450px;
  margin:0;
  width:70px;
}

ul li{
  
}

.topash{
  background:#f2f2f2;
  height:50px;
  margin-top:5px;
}

.history{
  color:#fbfbfb;
  font-weight:bold;
  font-size:2em;
  margin-left:80px;
  margin-top:5px;
  padding-top:5px;
}


</style>
