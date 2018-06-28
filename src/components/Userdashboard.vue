<template>
<div class="container">
   <div class="flex-container">
  <div>PettyCash</div>
  <div class="buttons"
  <div><button class="btn btn-default">New</button></div>
  <div><img style="width:40px;" src="../assets/profile.png"></div>
</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.flex-container {
  display: flex;
  background-color:  #f1f1f1;
  border: 2px solid grey;
   height: 50px;
 
}

.flex-container > div {
   /* margin: 10px;
  padding: 20px; */
  font-size: 25px;
 
}
.container{
    width: 90%;
     margin: auto;
     margin-top: 30px;
}

button{
    margin-left: 700px;
    font:30px; 
    color: white;
    background: orange;
}
img{
    margin-left: 20px;
}
    
</style>
