<template>
    <div class="container">
        <div class="row">
            <div class="PettyForm col-md-10">
                <p class="petty">Petty<b>Cash</b></p>
                <p><b>DETAILS</b></p>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="Date"><b>Date:</b></label>
                        <input type="date" class="form-control" id="Date" placeholder="DD/MM/YY">
                        </div>
                        <div class="form-group col-md-4 amount">
                        <label for="Amount">Amount</label>
                        <input type="number" class="form-control" id="Amount" placeholder="GHS">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="Description"><b>Description:</b></label>
                        <textarea class="form-control" id="Description" rows="5"></textarea>
                        </div>
                        <div class="form-group col-md-4 amount">
                        <label for="Payment">Select Payment Method:</label>
                        <select class="form-control" id="Payment">
                            <option>Cash</option>
                            <option>MTN Mobile Money</option>
                            <option>Airtel Money</option>
                            <option>tiGO Cash</option>
                        </select>
                        <div class="buttons">
                        <button type="reset" class="btn  reset" >RESET</button>
                        <button type="submit" class="btn  send">SEND</button>
                        </div>
                        </div>
                        
                    </div>
                    <div class="form-row buttons">              
                       
                        
                    </div>
                     
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
       
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PettyForm{
    
}
.petty{
    font-size:1.8em;
}

.container{
    background:#f6f6f6;
    font-family:Gotham;
    margin:auto;
    margin-top:50px;

}

.amount{
    margin-left:300px;
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


</style>
