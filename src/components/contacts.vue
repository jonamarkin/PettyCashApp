<template>
<div class="row">
    <div class="col-md-11">
        <div class="topnav col-md-8">
            <i  style="float:right;" class="fa fa-print" aria-hidden="true"></i>
        </div>
        <div class="contact col-md-8">
            <p>Contacts</p>
        </div>
        <div class="contacts col-md-8">
            <div class="flex-container" >
                <button ><img src="../assets/adminicon.png"><p id="name">Esther Aburabura</p></button>
                <button><img src="../assets/usericon.png"><p>Ato Markin</p></button>
                <button><img src="../assets/adminicon.png"><p>Samantha</p></button>
                <button><img src="../assets/usericon.png"><p>Richard</p></button> 
                <button><img src="../assets/adminicon.png"><p>Seddie</p></button>
                <button><img src="../assets/usericon.png"><p>Okyere Jonathan</p></button>
                <button><img src="../assets/usericon.png"><p>Andy</p></button>
                <button><img src="../assets/usericon.png"><p>Adrain</p></button> 
            </div> 
            <button class="load">
                <p><i class="fa fa-spinner" aria-hidden="true"></i>Load More</p>
            </button>
        </div>
        <div class="sidenav col-md-2" id="sidenav">
            <img src="../assets/adminicon.png">
            <p>Esther</p>
            <p>Aburabura</p>
            <p>eaburabura@gmail.com</p>
            <p><i class="fa fa-volume-control-phone" aria-hidden="true"></i> 0558365033</p>
             <button><small>Edit</small></button>
        </div>
    </div>
</div>    

    
</template>
<script>
export default {
    methods:{
    
},

  }

</script>
<style <style scoped>
.sidenav{
height: 500px;
border: 2px solid black;
margin-left: 190px;
margin-top: 80px;
color: #9D9D9D;
text-align: center;
background: #E6E6E6;
}
.sidenav p{
    font-size: 12px;
}
.sidenav button{
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 10px;
}
.topnav{
    height: 50px;
    background:#6CC5EB;
    float: right;
    margin-top: 80px;
}
.topnav i{
    margin-top: 20px;
    /* width: 50px; */
}
img{
    width: 90%;
    border-radius: 100%;
}
.contact{
    
    height: 30px;
     float: right;
     color: #9D9D9D;

}
.contacts{
    border: 2px solid #7D7D7D;
    float: right;
    height: 420px;
}
.load{
height: 25px;
text-align: center;
background: #6CC5EB;
width: 750px;
margin-top: 50px;
outline: 0;
}

.load i{
  
}
.flex-container{
    display: flex;
    direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    align-content: flex-start;
    margin-top: 20px;
}
.flex-container img{
    width: 90px;
}
.flex-container button{
   border: 2px solid #9F9F9F;
   border-radius: 10px;
   flex: 1 0 20%; 
   margin: 5px;
   height: 150px;
   font-size: 10px;
   outline: 0;
}
.flex-container p{
    text-align: center;
    color: #9D9D9D;
}

/* .people{
    border: 2px solid #f6f6f6;
    direction: row;
} */

</style>

