<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>

    <sui-grid-row>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
      <sui-grid-column :width="8">
        <docs-wireframe name="paragraph" />
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>


<script>
export default {
  name: 'Login',
  data () {
    return {
     
    }
  }
}
</script>
<style>

</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginbox{
    height:600px;
    padding-top:100px;
    padding-bottom:100px;
}
.loginside{
    background: #f4f4f4;
    width:40%;
    
    
}

.pettyside{
    background:blue;
    width:60%;
    float: right;
}

login{
    margin-top:50px;
}

.but{
    background: white;
    border-radius:25px!important;
    border: 1px solid #888888;
}
</style>
