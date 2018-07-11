<template>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="header col-md-12 col-lg-12 col-xl-12">
                <div class="petty">
                    <span ><b>Petty</b>Cash</span>
                </div>
            </div>
            <div class="PettyForm col-md-12 col-sm-12 col-xs-12">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <textarea class="form-control" id="Description" rows="17" placeholder="Description" ></textarea>
                        </div>
                        <div class="form-group col-md-4 amount right">
                            <div class="form-group item">
                                <input type="date" class="form-control" id="Date" placeholder="Date" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6 ">
                            </div>
                             <div class="form-group item">
                                <input type="number" class="form-control" id="Amount" placeholder="Amount" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6 ">
                            </div>
                             <div class="form-group item">
                                <select class="form-control" id="Payment"  style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6; ">
                                    <option>Select Payment Method</option>
                                    <option>MTN Mobile Money</option>
                                    <option>Airtel Money</option>
                                    <option>tiGO Cash</option>
                                </select>
                            </div>
                             <div class="form-group item">
                                <input type="number" class="form-control" id="PayNumber" placeholder="Payment Number" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6;">
                            </div>
                            <div class="buttons form-group">
                                <button type="reset" class="btn  reset" style="width: 100px; border-radius:0;">RESET</button>
                                <button type="submit" class="btn  send" @click="sendRequest" style="width: 100px; border-radius:0;">SEND</button>
                            </div>    
                        </div>
                         
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
</template>

<script>
export default {
  name: 'PettyForm',
  data () {
    return {
     
    }
  },
methods:{
    sendRequest() {
      this.$router.push({name: 'Userdashboard'}); 
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

.header{
    height:10%;
    background:#6CC5EB;
    margin-top :1%; 
    font-family  :Gotham
    width: 90%;
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

.PettyForm{
    width: 95%
    margin-left:2.5%
    margin-right 25%
    margin-top: 0.5%;

.right{
    margin-left:150px;
}

.buttons{
    margin-top:50px;
   float: right;
    
}

.reset{
    color:#6CC5EB;
    border: 2px solid #6CC5EB;
    background #ffffff;
    font-weight bold
}

.send{
    background:#6CC5EB;
    //color:#c4f3e0;
    font-weight bold
    color #f1f1f1;
}

#Description{
    background:#f9f9f9;
    border:1px solid #f6f6f6;
}

.item{
    margin-bottom:30px;
    background:#f9f9f9;
    border:1px solid #f6f6f6;
}

option{
    border-bottom: 1px solid #ebebeb;
    height:40px;
}

.form-group{
    border-radius: 0;
}
}
</style>
