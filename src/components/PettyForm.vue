<template>
<body>
    <div class="container">
        <div class="row">
            <div class="PettyForm col-md-12 col-sm-12 col-xs-12">
                <p class="petty">Petty<b>Cash</b></p>
                <p><b>DETAILS</b></p><hr>
               <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="Date"><b>Date:</b></label>
                        <input type="date" class="form-control" id="Date" placeholder="MM/DD/YYYY" >
                        </div>
                        <div class="form-group col-md-4 amount">
                        <label for="Amount"><b>Amount:</b></label>
                        <input type="number" class="form-control" id="Amount" placeholder="GHS">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="Description"><b>Description:</b></label>
                        <textarea class="form-control" id="Description" rows="5"></textarea>
                        </div>
                        <div class="form-group col-md-4 amount">
                        <label for="Payment"><b>Select Payment Method:</b></label>
                        <select class="form-control" id="Payment">
                            <option>Cash</option>
                            <option>MTN Mobile Money</option>
                            <option>Airtel Money</option>
                            <option>tiGO Cash</option>
                            <option>Vodafone Cash</option>
                        </select>
                        <div class="buttons">
                        <button type="reset" class="btn  reset" >RESET</button>
                        <button type="submit" class="btn  send" @click="sendRequest">SEND</button>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div class="form-row buttons">              
                    
                        
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
<style scoped>
.PettyForm{
    
}
.petty{
    font-size:2em;
}


.container{
    /* background:#f6f6f6; */
    font-family:Gotham;
    margin: auto;
    margin-top:100px;
    box-shadow: 2px 2px 2px 2px grey;
    }
.header{
    background: #59B2D7
}

.amount{
    margin-left:300px;
}

.buttons{
    margin-top:50px;
   float: right;
    
}

.reset{
  background: white;
    color: #59B2D7;
    border:1px solid #59B2D7;
    border-radius: 0;
}

.send{
    background: #59B2D7;
    color: white;
    border-radius: 0;
}
input{
    border-radius:0;
    border-bottom: 1px solid black;
    border-top: none;
    border-right: none;
    border-left: none;
 }
p{
    text-align: center;
   
}
hr{
    background-color: black;
}



</style>
