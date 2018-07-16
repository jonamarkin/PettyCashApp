<template>
<div class="ui grid no-margin min-height-100">
    <adminside></adminside>
    <!-- <Header></Header> -->
    <router-view></router-view>
</div>
</template>

<script>
import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import AdminInbox from './AdminInbox.vue';

export default {
  name: 'AdminDashboard',
  data () {
    return {

    }
  },
  components:{
	  'Header':Header,
      'adminside':AdminSide,
      'admininbox':AdminInbox
  }
}
</script>

<style>

</style>

