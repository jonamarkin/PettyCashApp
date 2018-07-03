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
         <a href="#"><i class="far fa-envelope"  style="font-size:35px; margin-top:30px; cursor:pointer;"></i><br/>
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
   <div class="col-md-2 adminshow">
        <img src="../assets/adminnew.png">
        <span style="margin:auto;"><b>ADMIN</b></span><br/>
        <span style=""><b>FREDA</b></span><br/><br/><br/>
        <i class="fas fa-inbox" style="font-size:20px; cursor:pointer;"> Inbox</i><span style="margin-left:20px;  color:#cccccc;"><b>50</b></span><br/><br/>
        <i class="fas fa-history" style="font-size:20px; cursor:pointer;"> History</i><span style="margin-left:20px;  color:#cccccc;"><b>50</b></span><br/><br/>
        <i class="fas fa-file" style="font-size:20px; cursor:pointer;"> Reports</i><span style="margin-left:20px; color:#cccccc;"><b>50</b></span><br/>
        
   </div>
   <div class="col-md-6 request-table">
       <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">From</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>23/05/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>20/01/2017</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>10/01/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>23/05/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>20/01/2017</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>10/01/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>23/05/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>20/01/2017</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>10/01/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>23/05/2018</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>20/01/2017</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>10/01/2018</td>
                    </tr>
                </tbody>
            </table>
        </div>
   </div>
   <div class="col-md-3 right-side">
       <div class="right-stuff col-md-12">
           <span style="margin-top:25px; font-size:1.2em;"><u><b>PettyCash Transactions</b></u></span><br/>
           <div class="trans-draw" style="margin-top:20px;">
               <span class="trans" style="cursor:pointer;">
               <i class="fas fa-exchange-alt" style="font-size:55px; cursor:pointer;"></i><br/>
               <span> <b>TRANSFERS</b></span>
               </span> 
            </div>
            <div class="search-trans">
                <input type="text" class="form-control" placeholder="Search Recent Transactions" style="height:38px; margin-top:10px; ">               
            </div>
            <div class="trans-items">
                <span><b>10/01/2018</b></span><br/>
                <span><b>Paapa Sam</b></span><br/>
                <span><b>GHC 750.00</b></span><span style="float:right; background:#00a1e6; width:50px; text-align:center;"><b>SENT</b></span><br/>
                <hr >
                <span><b>10/01/2018</b></span><br/>
                <span><b>Paapa Sam</b></span><br/>
                <span><b>GHC 750.00</b></span><span style="float:right; background:#00a1e6; width:50px; text-align:center;"><b>SENT</b></span><br/>
                <hr>
                <span><b>10/01/2018</b></span><br/>
                <span><b>Paapa Sam</b></span><br/>
                <span><b>GHC 750.00</b></span><span style="float:right; background:#00a1e6; width:50px; text-align:center;"><b>SENT</b></span><br/>
                <hr>
                
            </div> 
       </div>
   </div>
        

   
  </div>

  </div> 




  


</template>

<script>
export default {
    
    methods:{
    // NewRequest() {
    //   this.$router.push({name: 'PettyForm'}); 
    // },
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
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
