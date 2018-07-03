<template>
<div class="row">
    <div class="col-md-11">
        <div class="topnav col-md-8">
            <i style="float:right;" class="fa fa-print" aria-hidden="true"></i>
        </div>
        <div class="contact col-md-8">
            <p>Contacts</p>
        </div>
        <div class="contacts col-md-8">
            <div class="flex-container">
                <div><img src="../assets/adminicon.png"><p>Seddie</p></div>
                <div><img src="../assets/adminicon.png"><p>Andy</p></div>
                <div><img src="../assets/adminicon.png"><p>John</p></div>
                <div><img src="../assets/adminicon.png"><p>Adrain</p></div>
                <div><img src="../assets/adminicon.png"><p>Richard</p></div>
                <div><img src="../assets/adminicon.png"><p>John</p></div>
                <div><img src="../assets/adminicon.png"><p>Adrain</p></div>
                <div><img src="../assets/adminicon.png"><p>Richard</p></div>
            </div> 
            <div class="load">
                <p><i class="fa fa-spinner" aria-hidden="true"></i>Load More</p>
            </div>
        </div>
        <div class="sidenav col-md-2">
            <img src="../assets/usericon.png">
            <p>Esther</p>
            <p>Aburabura</p>
            <p>eaburabura@gmail.com</p>
            <p><i class="fa fa-volume-control-phone" aria-hidden="true"></i>0558365033</p>
             <p><small>Edit</small></p>
        </div>
    </div>
</div>    
    
</template>
<script>
export default {
    
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
}
.topnav{
    height: 50px;
    background:#6CC5EB;
    float: right;
    margin-top: 80px;
}
img{
    width: 90%;
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
height: 20px;
text-align: center;
background: #6CC5EB;
width: 750px;
margin-top: 50px;
}
.flex-container{
    display: flex;
    direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;
    margin-top: 20px;
}
.flex-container img{
    width: 80px;
}
.flex-container div{
    /* margin-top: 20px; */
   border: 2px solid #9F9F9F;
   border-radius: 10px;
   flex: 1 0 20%; /* explanation below */
   margin: 5px;
   height: 150px;
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

