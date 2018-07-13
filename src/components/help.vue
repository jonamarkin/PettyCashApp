<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12">
            <div class="header col-md-12">
                <div class="petty">
                <span ><b>Petty</b>Cash</span>
                <span @click="logout" id="logout" style="float:right;">Logout<img style=" margin-left:5px;" src="../assets/logout.png"></span>
                </div>
            </div>
            <div class="info">
                <div class="header2 col-md-11">
                 <div class="title">
                     <h3>Help and Support</h3>
                     <p><small>Resources that will teach you everything about Petty Cash</small></p>
                     <input type="text" placeholder="How can we help you?"><button class="btn btn-primary">Search</button>
                 </div>
                 <img id="help" src="../assets/blue.png">
                 <div class="questions">
                     <div class="questions2">
                    <p><small>What kind of pricing plan is available?</small></p>
                    <p><small>Can you invite someone?</small></p>
                    <p><small>Can you invite visitors to chat?</small></p> 
                    </div> 
                    <span>Frequently Asked Questions</span>
                    <p><small>What is your refund policy?</small></p>
                    <p><small>What kind of reorting is available?</small></p>
                    <p><small>What limitations do account have?</small></p>
                    <p><small>Can I change the email address?</small></p> 
                                   
                 </div>
               </div>
                <div class="sidenav col-md-1">
                    <p @click="inbox"><img src="../assets/inbox.png">INBOX</p>
                    <p @click="payment"><img src="../assets/payment.png">PAYMENT</p>
                    <p @click="contact"><img src="../assets/contact.png">CONTACTS</p>
                    <p @click="settings"><img src="../assets/settings.png">SETTINGS</p>
                    <p id="page" @click="help"><img src="../assets/blueicons/help.png">HELP</p>
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
    background :#FCFCFC;
    border:2px solid #F1F1F1;
    float right
    margin-bottom 0.5%
    height: 580px;
    width:89%
    margin-right:2.3%;
    .title{
       margin-top 8%;
       text-align center;
        p{
            color #E1E1E1
        }
        input{
            border-radius 0;
            border 2px solid #E1E1E1;
            height 50px;
            width 30%;
            background #FAFAFA;
            color #D4D4D4
            font-size 20px;
        }
        button{
            border-radius 0;
            background #6CC5EB;
            border 0;
            margin-left 3px;
        }
    }
    .questions{
        height 200px;
        width 50%;
        border 2px solid #F1F1F1
        margin-left 31%;
        margin-top 55px
        background #FAFAFA;
        color #D4D4D4
        span{
            margin-left 10%;
        }
        p{
            color #6CC5EB;
            margin-left 10%;
            margin-top 15px
        }
        .questions2{
            float right
            margin-top 23px;
            margin-right 20px

        }
    }
      #help{
            position:relative; 
            top:80px; 
            z-index:2;
            width 40px
            margin-left 30%
            border-radius 100%
        }
}

.sidenav{
    background #FCFCFC
    border 2px solid #F1F1F1
    height 580px
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


</style>
