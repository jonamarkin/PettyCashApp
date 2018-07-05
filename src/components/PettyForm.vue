<template>
<body>
    <div class="container">
        <div class="row">
<<<<<<< HEAD
            <div class="PettyForm col-md-12 col-sm-12 col-xs-12">
                <p class="petty">Petty<b>Cash</b></p>
                <p><b>DETAILS</b></p><hr>
               <form>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                        <label for="Date"><b>Date:</b></label>
                        <input type="date" class="form-control" id="Date" placeholder="MM/DD/YYYY" >
=======
            <div class="PettyForm col-md-10 col-sm-10 col-xs-10">
                <p class="petty"><b>Petty</b>Cash</p>
                <p><b>DETAILS</b></p>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <textarea class="form-control" id="Description" rows="16" placeholder="Description" ></textarea>
>>>>>>> 0f53598f5eec21592d217f40fba000c56d3159ec
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
                    <div class="form-row">

                        <!-- <div class="form-group col-md-4 amount">
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
                        </div> -->
                        
                        
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
    margin: auto;
}
.petty{
    font-size:2em;
    color:#4dbded;
    text-align:center;
    margin: 0 auto;
}


.container{
<<<<<<< HEAD
    /* background:#f6f6f6; */
    font-family:Gotham;
    margin: auto;
    margin-top:100px;
    box-shadow: 2px 2px 2px 2px grey;
    }
.header{
    background: #59B2D7
=======
    background:#fcfcfc;
    font-family:Gotham;
    margin: auto;
    margin-top:30px;
    border: 1px solid #f6f6f6;
    margin-bottom:30px;

>>>>>>> 0f53598f5eec21592d217f40fba000c56d3159ec
}

.right{
    margin-left:150px;
}

.buttons{
    margin-top:50px;
   float: right;
    
}

.reset{
<<<<<<< HEAD
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
=======
    background:#ff0000;
    color:#ffc4c7;
}

.send{
    background: #00c174;
    color:#c4f3e0;
>>>>>>> 0f53598f5eec21592d217f40fba000c56d3159ec
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

</style>
