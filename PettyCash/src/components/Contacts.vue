<template>
<div class="ui grid no-margin min-height-100">
    <adminside></adminside>
    <!-- <Header></Header> -->
    <contacttable></contacttable>
</div>
</template>

<script>
import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import ContactTable from './ContactTable.vue';

export default {
  name: 'AdminDashboard',
  data () {
    return {

    }
  },
  components:{
	  'Header':Header,
      'adminside':AdminSide,
      'contacttable':ContactTable
  }
}
</script>

<style>

</style>

