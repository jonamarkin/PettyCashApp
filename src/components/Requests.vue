<template>
   <div class="row col-md-11 main-content">
    <div class="col-md-2 adminshow">
          <img src="../assets/adminnew.png">
          <div>
          <span style="margin:auto;"><b>ADMIN</b></span><br/>
          <span style=""><b>FREDA</b></span><br/><br/><br/>
          </div>
          <i class="fas fa-inbox" style="font-size:20px; cursor:pointer;"> Inbox</i><span style="margin-left:20px;  color:#cccccc;"><b>50</b></span><br/><br/>
          <i class="fas fa-history" style="font-size:20px; cursor:pointer;"> History</i><span style="margin-left:20px;  color:#cccccc;"><b>50</b></span><br/><br/>
          <i class="fas fa-file" style="font-size:20px; cursor:pointer;"> Reports</i><span style="margin-left:20px; color:#cccccc;"><b>50</b></span><br/>
          
    </div>
    <div class="col-md-7 request-table">
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
                      <td>{{name}}</td>
                      <td>{{email}}</td>
                      <td>{{company}}</td>
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



  


</template>

<script>
export default {
    data() {
        users: []
    return {
      name: this.$faker().name.findName(),
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
    }
},

    methods:{
    // NewRequest() {
    //   this.$router.push({name: 'PettyForm'}); 
    // },
    }
}
</script>
<style>



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

.container{
    margin:0 auto;
}
</style>
