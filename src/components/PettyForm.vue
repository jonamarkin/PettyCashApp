<template>
    <div class="row">
        <div class="PettyForm col-md-10">
            <p class="petty">Petty<b>Cash</b></p>
            <p>DETAILS</p>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-4">
                    <label for="Date">Date:</label>
                    <input type="date" class="form-control" id="Date" placeholder="DD/MM/YY">
                    </div>
                    <div class="form-group col-md-4">
                    <label for="Amount">Amount</label>
                    <input type="number" class="form-control" id="Amount" placeholder="GHS">
                    </div>
                </div>
                
                
            </form>
        </div>
       </div>

 
</template>

<script>
export default {
  name: 'PettyForm',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.PettyForm{
    margin:auto;
    background:#f6f6f6;
    margin-top:50px;
}

.petty{
    font-size:1.8em;
}
</style>
