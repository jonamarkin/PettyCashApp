<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <span class="petty">Petty<b>Cash</b></span>
       <nav class="topnav">
       </nav>
       <div class="request">
        Requests
        <div class="scrollable">
        <table class="table">
         <thead>
            <tr>
              <th>Date&Time</th>
              <th>Approved/Decline</th>
              <th>Payment Mode</th>
              <th>Amount Requested</th>
              <th>Amount Given</th>
            </tr>
         </thead>
         <tbody>
         <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
             <tr>
              <td>02/27/2018 13:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
             <tr>
              <td>02/27/2018 13:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
             <tr>
              <td>02/27/2018 13:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
            <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
            <tr>
              <td>09/23/2018 10:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>30.00</td>
            </tr>
             <tr>
              <td>02/27/2018 13:00</td>
              <td>Approved</td>
              <td>Cash</td>
              <td>50.00</td>
              <td>50.00</td>
            </tr>
           </tbody>  
        </table>
        </div>
      </div>
                    <nav class="sidenav col-md-2">
                      <img class="user" src="../assets/usericon.png">
                      <p>USER</p>
                      <p style="font-size:12px;">GEORGE OSEA</p>
                      <small><p>Offline<img class="red" src="../assets/red.png"></p></small>
                      <button class="btn btn-default">Requests</button>
                      <button class="btn btn-default" @click="newRequest">New Request</button>
                   </nav>
    </div>
  </div>

  </div> 




  


</template>

<script>
export default {
      data() {
    return {
      name: this.$faker().name.findName(),
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
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
.topnav{
 width:80%;
 height:50px;
 margin-top:10px;
 float: right;
 background:  #6CC5EB;
}
.request{
 width:80%;
 float: right;
 color: #979797;
 padding: 10px 10px 30px 10px;
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
