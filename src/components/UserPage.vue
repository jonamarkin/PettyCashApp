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
                <div class="main-content">
                  <div class="header2 col-md-12">
                      <img src="../assets/login.png" >
                      <span>Racheal Mensah</span>
                      <span><small>Offline</small></span>
                      <span class="newReq">
                        <button class="btn" @click="openForm">NEW REQUEST</button>
                      </span>
                  </div>
                  <div class="reqHis"><p>Request History</p></div>           
                  <div class="transaction-table">
                      <table class="table table-fixed">
                          <thead class="thead">
                              <tr>
                              <th scope="col">PAYMENT MODE</th>
                              <th scope="col">REQUESTED</th>
                              <th scope="col">RECEIVED</th>
                              <th scope="col">APPROVED/DECLINED</th>
                              <th scope="col">DATE</th>
                              <th scope="col">TIME</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="post in posts" :key="post.title" class="post-item">
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                                 <td>{{post.title}}</td>
                              </tr>
                              
                          </tbody>
                      </table>
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
      email: this.$faker().internet.email(),
      company: this.$faker().company.companyName(),
    //   date: this.$faker().date.date(),
    }
},

methods:{
    openForm(){
        this.$router.push({name: 'PettyForm'}); 
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


.logout{
  color:#daf0f9;
  font-size:1em;
  font-weight:bold;
  float:right;
  padding-right:10px;

}
  


}
.header2{
    height :50px;
    background :#FCFCFC;
    border-bottom:2px solid #F1F1F1; 

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
   
}


.transaction-table{

    th{
        color #89CCE9
        font-size 12px
        font-weight normal
        background #F2F2F2
        margin-top:0;
    }
    td{
        color #CECECE
        font-size 12px
    }
}


.main-content{
  border: 2px solid #f7f7f7;
  height:500px;
  margin-top:10px;
}


.btn{
  background: #6CC5EB;
  color:#faf3f5;
  width:130px;
  height:35px;
  float:right;
  margin-right:10px;
  margin-top:5px;
  border-radius:0;
  font-weight: bold;
  font-size:1.2em;
}

.reqHis{
    color:#cecece;
    font-weight:bold;
    margin-left:13px;
    padding-top:15px;
    font-size:0.8em;
  }

  a{
      text-decoration none
  }
</style>
