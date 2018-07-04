<template>
    <div class="container">
        <div class="row">
            <div class="PettyForm col-md-10 col-sm-10 col-xs-10">
                <p class="petty"><b>Petty</b>Cash</p>
                <p><b>DETAILS</b></p>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <textarea class="form-control" id="Description" rows="16" placeholder="Description"></textarea>
                        </div>
                        <div class="form-group col-md-4 amount right">
                            <div class="form-group item">
                                <input type="date" class="form-control" id="Date" placeholder="Date" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6">
                            </div>
                             <div class="form-group item">
                                <input type="number" class="form-control" id="Amount" placeholder="Amount" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6">
                            </div>
                             <div class="form-group item">
                                <input type="number" class="form-control" id="Payment" placeholder="Select Payment Method" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6">
                            </div>
                             <div class="form-group item">
                                <input type="number" class="form-control" id="PayNumber" placeholder="Payment Number" style="height:50px; background:#f9f9f9f9; border:1px solid #f6f6f6f6">
                            </div>
                            <div class="buttons form-group">
                                <button type="reset" class="btn  reset" style="width: 100px;">RESET</button>
                                <button type="submit" class="btn  send" @click="sendRequest" style="width: 100px;">SEND</button>
                            </div>    
                        </div>
                         
                    </div>
                    <div class="form-row">

                        <!-- <div class="form-group col-md-4 amount">
                        <label for="Payment"><b>Select Payment Method:</b></label>
                        <select class="form-control" id="Payment">
                            <option>Cash</option>
                            <option>MTN Mobile Money</option>
                            <option>Airtel Money</option>
                            <option>tiGO Cash</option>
                        </select>
                        <div class="buttons">
                        <button type="reset" class="btn  reset" >RESET</button>
                        <button type="submit" class="btn  send" @click="sendRequest">SEND</button>
                        </div>
                        </div> -->
                        
                    </div>
                    <div class="form-row buttons">              
                    
                        
                    </div> -->
                    
                </form>
            </div>
        </div>
    </div>


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
    color:#4dbded;
    text-align:center;
    margin: 0 auto;
}

.container{
    background:#fcfcfc;
    font-family:Gotham;
    margin: auto;
    margin-top:50px;
    border: 1px solid #f6f6f6;
    margin-bottom:50px;

}

.right{
    margin-left:150px;
}

.buttons{
    margin-top:50px;
}

.reset{
    background: #e52b32;
}

.send{
    background: #30b479;
}

#Description{
    background:#f9f9f9;
    border:1px solid #f6f6f6;
}

.item{
    margin-bottom:30px;
}

</style>
