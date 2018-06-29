<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <nav class="topnav">
        <div class="nav-items">
          <span class="petty">Petty<b>Cash</b></span>
          <div class="right-stuff">
            <button class="btn new">New</button>
            <img class="usericon" src="../assets/profile.png" width="40"/>
            Welcome.
            <a href="#"><button class="logoutbtn"><img class="logout" src="../assets/logout.png" width="40"/></button></a>
          </div>
        </div>
      </nav>
      <div class="dashboard">
        <span class="dash">Dashboard</span>
      </div>
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
  background:#434446;
  height:450px;
  margin:0;
  width:70px;
}

ul li{
  
}

.topash{
  background:#434446;
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
