<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <span class="petty">Petty<b>Cash</b></span>
       <nav class="topnav">
       </nav>
        <nav class="sidenav col-md-2">
                      <img class="user" src="../assets/usericon.png">
                      <p>USER</p>
                      <p style="font-size:12px;">GEORGE OSEA</p>
                      <small><p>Offline<img class="red" src="../assets/red.png"></p></small>
                      <button class="btn btn-default">Requests</button>
                      <button class="btn btn-default" @click="newRequest">New Request</button>
                   </nav>
       <div class="request">
        Requests
        <div class="scrollable">
       <div class="col-md-10 table">
        <div class="table-responsive">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">Date&Time</th>
                      <th scope="col">Approved/Decline</th>
                      <th scope="col">Payment Mode</th>
                      <th scope="col">Amount Requested</th>
                      <th scope="col">Amount Given</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <th scope="row"></th>
                      <td>{{date}}</td>
                      <td>{{approve}}</td>
                      <td>{{payment}}</td>
                      <td>{{request}}</td>
                      <td>{{given}}</td>
                      </tr>
                      
                  </tbody>
              </table>
          </div>
    </div>
    
                   
    
  </div>

  </div> 
    </div>
  </div>
</div>


  


</template>

<script>
export default {
      data() {
    return {
      date: this.$faker().date.findName(),
      approve: this.$faker().internet.email(),
      payment: this.$faker().company.companyName(),
      request: this.$faker().company.companyName(),
      given: this.$faker().company.companyName(),

    }
},
    
  
    methods:{
     newRequest() {
    this.$router.push({name: 'PettyForm'}); 
}
  }
}


</script>
<style scoped>
table{
  margin: 0;
  padding: 0;
}
.topnav{
 width:80%;
 height:50px;
 margin-top:10px;
 float: right;
 background:  #6CC5EB;

}
.request{
 float: right;
 color: #979797;
 
}

.petty{
  margin-left:70px;
  font-size:1.8em;
}
.sidenav{
  background:#FCFCFC;
  border: 2px solid #F6F6F6;
  height:550px;
  margin-top:20px;
  margin-left:30px;
}
button{
  width: 100%;
  margin-top: 10px;
  background: #6CC5EB;
  border-radius: 0;
}
button:hover{
  color: white;
  border: 10px solid #C2C2C2;
  cursor: pointer;
 }
 table{
   border: 1px solid black;
 }
 .user{
   width:80%;
   margin: 60% 10% 10% 10%;
       }
 .red{
   width: 30px;
   
    }
 p{
   font-weight: bold;
 }
 .red{
   width: 30px;
   padding-top: 20px;
 }
 .scrollable{
   overflow-y: scroll;
   height: 530px;
}
 </style>
