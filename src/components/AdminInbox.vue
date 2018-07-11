<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <div class="header col-md-12 col-lg-12 col-xl-12">
                <div class="petty">
                    <span ><b>Petty</b>Cash</span>
                    <span id="logout" @click="logout" style="float:right;">Logout<img style=" margin-left:5px;" src="../assets/logout.png"></span>
                </div>
                </div>
                <div class="header2 col-md-12 col-lg-12 col-xl-12">
                <div class="info col-md-12 col-lg-12 col-xl-12">
                    <img style="width:50px;" src="../assets/login.png">
                    <span>Racheal Mensah</span>
                    <span><img style="width:20px;" src="../assets/green.png"><small>Online</small></span>
                </div>
                </div>         
                <div class="col-md-11 col-lg-11 col-xl-11 transaction-table">
                    <table class="table">
                        <thead class="thead">
                            <tr>
                            <th scope="col">FROM</th>
                            <th scope="col">SUBJECT</th>
                            <th scope="col">DATE</th>
                            <th scope="col">TIME</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="post in posts" :key="post.title" class="post-item">
                                 <td><input class="checkbox" type="checkbox" @click="clicked">{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                              </tr>
                            <!-- <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr> -->
                        </tbody>
                    </table>
                </div>
                <div class="sidenav col-md-1 col-lg-1 col-xl-1">
                    <p id="page" @click="inbox"><img src="../assets/blueicons/inbox.png">INBOX</p>
                    <p @click="payment"><img src="../assets/payment.png">PAYMENT</p>
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
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
    //   date: this.$faker().date.date(),
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
    .checkbox{
      outline 0
      margin-right 20px
    }
}



</style>
