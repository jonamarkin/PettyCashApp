<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="header col-md-12">
                <div class="petty">
                <span ><b>Petty</b>Cash</span>
                <span id="logout" @click="logout" style="float:right;">Logout<img style=" margin-left:5px;" src="../assets/logout.png"></span>
                </div>
            </div>
            <div class="header2 col-md-12">
                <div class="info col-md-12">
                    <img style="width:50px;" src="../assets/login.png">
                    <span>Racheal Mensah</span>
                    <span><img style="width:20px;" src="../assets/green.png"><small>Online</small></span>
                    <div class="add col-md-2 ">
                        <button class="btn btn-primary">Add Contact<img style="width:15px; margin-left:5px;" src="../assets/add.png"></button>
                    </div>
                    <div class="conatctinfo col-md-6" >
                        <span>ESTHER ABURABURA CONTACT(+233)558365033</span>
                        <p><small>EDIT</small></p>
                        <p><small>DELETE</small></p>

                    </div>
                </div>
            </div>
         
    <div class="col-md-11 transaction-table">
         <div class="table-responsive">
           <div class="scrollbar">   
            <table class="table" id="myTable">
                            
                  <thead>
                      <tr>
                      <th scope="col">USER</th>
                      <th scope="col">PHONE NUMBER</th>
                      <th scope="col">EMAIL</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td>{{name}}</td>
                      <td>{{date}}</td>
                      <td>{{email}}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
    </div>
   </div>  
            <div class="sidenav col-md-1">
                <p @click="inbox"><img src="../assets/inbox.png">INBOX</p>
                <p @click="payment"><img src="../assets/payment.png">PAYMENT</p>
                <p id="page" @click="contact"><img src="../assets/blueicons/contacts.png">CONTACTS</p>
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
      name: this.$faker().name.findName(),
      date: this.$faker().date.future(),
      email:this.$faker().internet.email()
    }
},
methods:{
inbox(){
    this.$router.push({name: 'AdminInbox'})
},payment(){
    this.$router.push({name: 'transactions'})
},logout(){
  this.$router.push({name: 'login'})
},contact(){
  this.$router.push({name: 'contact'})
},settings(){
  this.$router.push({name: 'contact'})
},help(){
  this.$router.push({name: 'help'})
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
         #logout{
              &:hover{
                  cursor pointer
         }
         }
     } 

}
.header2{
    margin-top:10px;
    height :70px;
    background :#FCFCFC;
    border:2px solid #F1F1F1;
  .info{
     font-size 12px
     font-weight bold
   
  .conatctinfo{
    height 60px
    border-right 3px solid #CCCCCC
    border-left 3px solid #CCCCCC 
    float right
    text-align center
    color #6CC5EB
    font-weight normal
    font-size 14px
    margin-top 2px
    p{
        margin -10px
        font-size 10px
        margin-top 5px
        margin-left 350px
        color #CCCCCC
    }
   
  }
  .add{
    float right
    button{
        border-radius 0
        height 30px
        width 100px
        font-size 10px
        margin 10px 20px 10px 20px
        background  #6CC5EB
        border 0
        
    }
  }
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
    margin-top 10px

    img{
        width 30px
        &:hover{
        //background #81CCEC
        cursor pointer
        
    }
    }
    p{
        padding-bottom 40px
        margin-top 10px
        &:hover{
            color #81CCEC
        }
    }
  #page{
     color:#81CCEC
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
