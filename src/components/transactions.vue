<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="header col-md-12">
                <div class="petty">
                <span ><b>Petty</b>Cash</span>
                <span @click="logout" id="logout" style="float:right; ">Logout<img style=" margin-left:5px;" src="../assets/logout.png"></span>
                </div>
            </div>
             <div class="header2 col-md-12">
                <div class="info col-md-12">
                    <img style="width:50px;" src="../assets/login.png">
                    <span>Racheal Mensah</span>
                    <span><img style="width:20px;" src="../assets/green.png"><small>Online</small></span>
                </div>
            </div>
         
    <div class="col-md-11 transaction-table">
         <div class="table-responsive">
           <div class="scrollbar">   
            <table class="table" id="myTable">
                            
                  <thead>
                      <tr>
                      <th scope="col">USER</th>
                      <th scope="col">TRANSACTION NO.</th>
                      <th scope="col">AMOUNT</th>
                      <th scope="col">REFERENCE</th>
                      <th scope="col">DATE</th>
                      <th scope="col"></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td>{{name}}</td>
                      <td>{{name}}</td>
                      <td>{{random}}</td>
                      <td>{{random}}</td>
                      <td>{{date}}</td>
                      <td style="width:5px" ><img style="width:25px" src="../assets/check.png"></td>
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
   </div>  
            <div class="sidenav col-md-1">
                <p @click="inbox"><img src="../assets/inbox.png">INBOX</p>
                <p @click="payment" id="page"><img src="../assets/blueicons/payments.png">PAYMENT</p>
                <p @click="contact"><img src="../assets/contact.png">CONTACTS</p>
                <p @click="settings"><img src="../assets/settings.png">SETTINGS</p>
                <p @click="help"><img src="../assets/help.png">HELP</p>
            </div>
        </div>
    </div>
  
    </div>

</template>
<script>
export default {
    data() {
    return {
      name: this.$faker().name.findName(),
      random: this.$faker().name.findName(),
      date: this.$faker().date.between(),
    }
},
methods:{
//      myFunction() {
//   var input, filter, table, tr, td, i;
//   input = document.getElementById("date");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("myTable");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// },
inbox(){
    this.$router.push({name: 'AdminInbox'})
},payment(){
    this.$router.push({name: 'transactions'})
},logout(){
  this.$router.push({name: 'login'})
},contact(){
  this.$router.push({name: 'contact'})
},settings(){
  this.$router.push({name: 'Settings'})
},help(){
  this.$router.push({name: 'help'})
}
}
    
}
</script>
<style lang="stylus" scoped>
.header{
    height:8%;
    background:#6CC5EB;
    margin-top :1%; 
    font-family  :Gotham
    width: 95%;
    margin-right:2.5%;
    margin-left:2.5%

    
    span{
        color: #C0E6F6;
    }
   span b{
        color:white;
    }
    .petty{
         padding-top 10px
         #logout{
              &:hover{
                  cursor pointer
         }
         }
        
    }
}
.header2{
    margin-top:0.5%;
    height :10%;
    background :#FCFCFC;
    border:2px solid #F1F1F1;
    width:95%
    margin-left:2.5%
    margin-right:2.5%
  .info{
     font-size 12px
     font-weight bold
    } 
}
.sidenav{
    background #FCFCFC
    border 2px solid #F1F1F1
    height 85%
    width 6%;
    font-size 6.5px
    font-weight bold
    color #E1E1E1
    text-align center
    margin-top 0.5%
    margin-bottom 0.5%
    margin-right 0
    margin-left 2.5%;

    img{
        width 30px
        &:hover{
        // background #81CCEC
        cursor pointer
        
    }
    }
    p{
        padding-bottom 40px
        margin-top 10px
        &:hover{
            color #81CCEC
        }
      #page{
     color:#81CCEC
  }  
    }
   
}
.transaction-table{
    float right 
    margin-right:1.2%
    margin-top 0.5%
    margin-bottom 0.5%
    height: 85%;
    th{
        color #89CCE9
        font-size 12px
        font-weight normal
        background #F2F2F2
    }
    td{
        color #CECECE
        font-size 12px
    }
}
.scrollbar{
    overflow-y scroll 
    height 100% 
}

</style>
