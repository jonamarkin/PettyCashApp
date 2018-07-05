<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="header col-md-12">
                <div class="petty">
                <span ><b>Petty</b>Cash</span>
                <span style="float:right;">Logout</span>
                </div>
            </div>
            <div class="header2 col-md-12">
                <img src="../assets/login.png">
                <span id="username">Racheal Mensah</span>
                <span><small><img id="green" src="../assets/green.png">Online</small></span>
                <button class="btn">Apply</button>
                <div class="details">
                    <span>DATE / REFERENCE</span>
                </div>
                <div class="dropdown" id="dropdown">
                        <button class="btn btn-default dropdown-toggle" id="dropdown" type="button" data-toggle="dropdown">Filter
                        <span class="caret"></span></button>
                        <ul class="dropdown-menu">
                        <li><a>Date</a></li>
                        <li><a>Reference No.</a></li>
                        </ul>
                    </div>
                <!-- <button class="dropbtn">Filter</button> -->
            </div>
         
    <div class="col-md-11 transaction-table">
         <div class="table-responsive">
           <div class="scrollbar">   
            <table class="table" id="myTable">
                            
                  <thead>
                      <tr>
                      <th scope="col">USER</th>
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
                      <td>{{date}}</td>
                      <td><img style="width:25px" src="../assets/check.png"></td>
                      <!-- <td>{{date}}</td> -->
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
   </div>  
            <div class="sidenav col-md-1">
                <p><img src="../assets/inbox.png">INBOX</p>
                <p><img src="../assets/payment.png">PAYMENT</p>
                <p><img src="../assets/contact.png">CONTACTS</p>
                <p><img src="../assets/settings.png">SETTINGS</p>
                <p><img src="../assets/help.png">HELP</p>
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
    //   email: this.$faker().internet.email(),
      random: this.$faker().random.arrayElement(),
      date: this.$faker().date.past(),
    }
},
methods:{
     myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("date");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
}
    
}
</script>
<style lang="stylus" scoped>
.header{
    height:50px;
    background:#6CC5EB;
    margin-top :15px; 
    font-family  :Gotham
    
    span{
        color: #C0E6F6;
    }
   span b{
        color:white;
    }
    .petty{
         padding-top 10px
     } 

}
.header2{
    margin-top:10px;
    height :50px;
    background :#FCFCFC;
    border:2px solid #F1F1F1; 

    img{
        width :40px;
        border :2px solid #F5F5F5;
        border-radius:100%;
        margin-top:2px; 
        margin-left :50px
    }
    span {
        font-size :10px;
        font-weight :bold   
    }
     #green{
         border 0
         border-radius 0
         margin-left 0
         width 20px
     } 
     
    .details{
        height:30px;
        width:40%
        border :2px solid #F0F0F0;
        float right
        margin-top 10px
        margin-right 50px

        span{
            font-size 8px
            color #DADADA
            font-weight normal
            padding-left 30%
        }
    }
    #dropdown{
        border-radius 0
        float right
        margin-right 30px
        outline 0
        li{
            font-weight bold
            font-size 8px
            color #8EC2EB
        }
        
    }
    button{
        float right
        width 80px
        height 30px
        margin-top 5px
        border-radius 20px
        color white 
        font-size 10px  
        background #67AEE6
    }
}
.sidenav{
    background #FCFCFC
    border 2px solid #F1F1F1
    height 500px
    width 70px;
    font-size 7px
    font-weight bold
    color #E1E1E1
    text-align center

    img{
        width 30px
        &:hover{
        // background #81CCEC
        cursor pointer
        
    }
    }
    p{
        padding-bottom 40px
        &:hover{
            color #81CCEC
        }
    }
    
}
.transaction-table{
    float right 
    margin-right 35px
    margin-top 10px
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
    height 500px 
}

</style>
