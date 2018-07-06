<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="header col-md-12">
                    <div class="logo"><span class="petty"><b>Petty</b></span><span class="cash">Cash</span> <span class="logout">Logout <img src="../assets/logout.png"></span></div>
                </div>           
                <div class="col-md-11 manage">
                    <div class="col-md-12">
                        <span class="account"><h3>Manage Your Account</h3></span>
                        <span class="more">If your Android device uses Google Play Services, you may manage your Google Apps settinsg in Google Settings<br/>
                        Note: If your Android device uses Google Play Services, you may manage your Google Apps settinsg in Google Settings</span>
                    </div>
                </div>
                <div class="col-md-11 compInfo">
                    <div class="col-md-12 info">
                        <h3>Company Information</h3>
                        <h4>Company Name</h4>
                        <div class="compName"><span>Nfortics Financial Technology Services</span></div>
                        <h4>Address</h4>
                        <div class="compName"><span>Nii, 9 Streets Dzorwulu</span></div>
                        <h4>Email</h4>
                        <div class="emailside">
                            <div class="col-md-2" style=" float:right; height:35px;">
                                <button class="btn" style="background:#54bfef; color:#c8effa; font-size:0.8em;"><span>UPDATE SETTINGS</span></button>
                            </div>
                            <div class="email">
                                <span>nfortics@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="newsletter col-md-11">
                    <div class="newsside">
                        <div class="col-md-2" style=" float:right; height:35px;">
                            <button class="btn" style="background:#54bfef; color:#c8effa; font-size:0.8em;"><span>SAVE</span></button>
                        </div>
                        <div class="col-md-10">
                            <h4>NEWSLETTER  <input type="checkbox"></h4>
                            <span><p> A newsletter is printed bla bla bla </p></span>
                        </div>
                    </div>
                </div>
                <div class="sidenav col-md-1">
                    <p><img src="../assets/inbox.png">INBOX</p>
                    <p><img src="../assets/payment.png">PAYMENT</p>
                    <p><img src="../assets/contact.png">CONTACTS</p>
                    <p><img src="../assets/blueicons/settings.png">SETTINGS</p>
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
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
    //   date: this.$faker().date.date(),
    }
},

computed:{
    posts(){
        return this.$store.state.posts
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
    
   
.logo{
  font-size:1.2em;
  margin-left:40px;
  padding-top:15px;


  .petty{
  color:#faf3f5;

}
.cash{
  color:#daf0f9;
}


.logout{
  color:#daf0f9;
  font-size:1em;
  font-weight:bold;
  float:right;
  padding-right:10px;

}
  
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
    margin-top:10px;

    img{
        width 30px
        
    }
    p{
        padding-bottom 40px
        &:hover{
            color #81CCEC
        }
    }
    
}
.manage{
    float right 
    margin-right 35px
    margin-top 10px
    border 2px solid #F1F1F1
    height:100px;
    background:#fafafa;
    font-family Gotham

    .more{
     color #CECECE
     font-size 0.8em
    }

    h3{
        color #111111
        font-family Gotham
        font-weight:bold;
        font-size:1.4em
    }
}

.compInfo{
    float right 
    margin-right 35px
    margin-top 10px
    border 2px solid #F1F1F1
    height:280px;
    background:#fcfcfc;
    font-family Gotham

    h3{
        font-family Gotham
        font-weight:bold;
        font-size:1.4em
    }

    .compName{
        color #CECECE
        font-size 1em
        border 2px solid #F1F1F1
        background #f9f9f9
        height:35px;
        width:400px;

        span{
            margin-left:5px;
        }
        
    }

    .email{
        color #CECECE
        font-size 1em
        border 2px solid #F1F1F1
        background #f9f9f9
        height:35px;
        width:400px;
         span{
            margin-left:5px;
        }
        
    }


    h4{
        font-family Gotham
        margin-top 10px
        font-weight:bold;
        font-size:1.15em
        margin-bottom:0;
    }
}

.newsletter{
    float right 
    margin-right 35px
    margin-top 10px
    border 2px solid #F1F1F1
    height:100px;
    background:#fafafa;
    font-family Gotham

    h4{
        font-family Gotham
        margin-top 10px
        font-weight:bold;
        font-size:1.15em
        margin-bottom:0; 
    }

    p{
        color #CECECE
        font-size 0.8em
    }
}

</style>
