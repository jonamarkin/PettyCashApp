<template>
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="headerbar">
              <div class="logo"><span class="petty"><b>Petty</b></span><span class="cash">Cash</span> <span class="logout">Logout</span></div>
            </div>
            <div class="main-content">
              <div class="topbar">
                <span class="profile">
                  <img src="../assets/profilepic1.png" width="50px" height="50" style="border-radius:35px;">
                  <span class="username" style="color:#393333;"><b>George Osae</b></span><span class="online" style="color:#9aa6aa;" ><small><b> OFFLINE</b></small></span>
                </span>
                <span class="newReq">
                  <button class="btn" @click="onForm">NEW REQUEST</button>
                </span>
              </div>
              <div class="reqHis"><p>Request History</p></div>
              <div class="requestTable">
                <table class="table">
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
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
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
  name: 'UserPage',
  data () {
    return {
     
    }
  },
   methods:{
    onForm() {
      this.$router.push({name: 'PettyForm'}); 
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" >

.container-fluid{
  font-family:Gotham;
}

.headerbar{
  background:#6bc4ea;
  height:60px;
  margin-top:10px;


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

.logo{
  font-size:1.2em;
  margin-left:40px;
  padding-top:15px;
  
}
}

.main-content{
  border: 2px solid #f7f7f7;
  height:500px;
  margin-top:10px;

  .reqHis{
    color:#cecece;
    font-weight:bold;
    margin-left:40px;
    padding-top:15px;
  }

  .requestTable{
      margin-left:5px;
       margin-right:5px;
    .table{
      .thead{
         background:#f1f1f1;
          color:#6bc4ea;
      }
      .tbody{
        overflow-y:scroll;
        max-height:300px;
      }
    }
  }
}

.topbar{
  height:60px;
  border-bottom:2px solid #fbfbfb;
  background:#fcfcfc;
}

.profile{
  margin-left:60px;
  margin-top:5px;
  margin-bottom:5px;
}

.btn{
  background: #f9f9f9;
  color:#69c3e8;
  width:150px;
  height:40px;
  float:right;
  margin-right:10px;
  margin-top:10px;
  border-radius:0;
  font-weight: bold;
}




</style>

