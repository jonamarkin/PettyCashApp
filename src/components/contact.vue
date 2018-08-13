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
                        <!-- <button class="btn btn-primary">Add Contact<img style="width:15px; margin-left:5px;" src="../assets/add.png"></button> -->
        <div class="container">
                    <!-- Trigger the modal with a button -->
                    <button type="button"  class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Contact<img style="width:15px; margin-left:5px;" src="../assets/add.png"></button>
                    <!-- Modal -->
                    <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content" id="add">
                    <div id="addheader" style="background:#F2F2F2;" class="modal-header">
                        <h4 class="modal-title" style="margin-left:30px;">Create a New Account</h4>
                        <button id="exit" type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                       
                        <p><label>USER</label></p><p><input type="text" ></p>
                        <p><label>PHONE NUMBER</label></p><p><input type="text" ></p>
                        <p><label>EMAIL</label></p><p><input type="text" ></p>   
                            
                    </div>
                    <div class="modal-footer">
                    <button style="font-size:15px" type="button" class="btn btn-info" data-dismiss="modal">ADD</button>
                    </div>
                    </div>
                   </div>
                   </div>
        </div>
                    </div>
                    <div class="contactinfo col-md-6" >
                        <span>ESTHER ABURABURA CONTACT(+233)558365033</span>
                        <!-- MODAL FOR EDIT -->
        <div class="container">
                    <!-- Trigger the modal with a button -->
                    <button class="btn btn-info" type="button" id="edit"  data-toggle="modal" data-target="#Modal1">Edit</button>
                    <!-- Modal -->
                    <div class="modal fade" id="Modal1" role="dialog">
                    <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content" id="add" style="background:#F2F2F2;">
                    <div id="addheader" class="modal-header">
                        <h4 class="modal-title" style="margin-left:30px;color:black;">Update User Contact Details</h4>
                        <button id="exit" type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <label style="color:black;">USER</label>
                        <p style="font-size:15px; text-align:center;color:#3E3E3E;margin-left:0;padding-bottom:30px;"><input style="background:inherit; border:2px solid #DEE2E6;" type="text"></p>
                        <label style="color:black;">PHONE NUMBER</label>
                        <p style="font-size:15px; text-align:center;color:#3E3E3E;margin-left:0;padding-bottom:30px"><input style="background:inherit; border:2px solid #DEE2E6;" type="text"></p> 
                        <label style="color:black;">EMAIL</label>
                        <p style="font-size:15px; text-align:center;color:#3E3E3E;margin-left:0;padding-bottom:30px"><input style="background:inherit; border:2px solid #DEE2E6;" type="text"></p>   
                    </div>
                    <div class="modal-footer">
                        <button id="save" type="button" class="btn btn-info" data-dismiss="modal">SAVE</button>
                    </div>
                    </div>
                   </div>
                   </div>
        </div>
        <!-- MODAL FOR DELETE -->
        <div class="container">
                    <!-- Trigger the modal with a button -->
                    <button class="btn btn-info" id="delete" type="button"  data-toggle="modal" data-target="#Modal2">Delete</button>
                    <!-- Modal -->
                    <div class="modal fade" id="Modal2" role="dialog">
                    <div class="modal-dialog">
                    <!-- Modal content-->
                    <div class="modal-content" style="color:black;margin-top:40%;">
                    <div class="modal-header">
                        <h4 class="modal-title" style="margin-left:30px;">Delete Confirmation</h4>
                        <button id="exit" type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p style="font-size:15px; text-align:center;color:#3E3E3E;margin-left:0;">Are you sure you want to delete selected contact?</p>      
                    </div>
                    <div class="modal-footer">
                         <button id="close" type="button" class="btn btn-info" data-dismiss="modal">YES</button>
                         <button id="close" style="background:#C9C9C9" type="button" class="btn btn-warning" data-dismiss="modal">NO</button>
                    </div>
                    </div>
                   </div>
                   </div>
        </div>                

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
                      <tr>
                      <td>{{name}}</td>
                      <td>{{date}}</td>
                      <td>{{email}}</td>
                      </tr>
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
                <p style="color:#81CCEC;" @click="contact"><img src="../assets/blueicons/contacts.png">CONTACTS</p>
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


.logout{
  color:#daf0f9;
  font-size:1em;
  font-weight:bold;
  float:right;
  padding-right:10px;
  &:hover{
      cursor pointer
  }

}
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
    height :12%;
    background :#FCFCFC;
    border:2px solid #F1F1F1;
    width:95%
    margin-left:2.5%
    margin-right:2.5%
  .info{
     font-size 12px
     font-weight bold
   
  .contactinfo{
    height 60px
    border-right 3px solid #CCCCCC
    border-left 3px solid #CCCCCC 
    float right
    text-align center
    color #6CC5EB
    font-weight normal
    font-size 14px
    margin-top 2px
    button{
        border-radius 0
        font-size 8px
        height 20px
        width 10%
        background  #6CC5EB
        border 0
        float right 
        outline 0
        margin-left 10px;
    }
   
  }
  .add{
    float right
    button{
        outline 0
        border-radius 0
        height 30px
        width 100px
        font-size 10px
        margin 10px 20px 10px 20px
        background  #6CC5EB
        border 0
        
    }
    .modal-body{
        input{
            border 0
            border-radius 0
            background #F3F3F3
            height 45px
            width 80%
        }
        label{
            font-weight normal
            font-size 13px
        }
    }
     }
  #add{
    height 500px;
    margin-top 20%;
    border-top-left-radius 20px
    border-top-right-radius 20px
}
#addheader{
    border-top-left-radius 20px
    border-top-right-radius 20px
}
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
    .scrollbar{
        overflow-y scroll
        height 85%
    }
}
#close{
    height 30px
    width 50px
    font-size 15px
}
#save{
    height 30px
    width 80px
    font-size 15px
    font-weight bold
}
#exit{
    background transparent
    font-size 25px
    margin-left 100px
}
</style>
