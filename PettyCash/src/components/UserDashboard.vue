<template>
<div class="ui grid no-margin min-height-100">
    <userside></userside>
    <!-- <Header></Header> -->
    <usertable></usertable>
</div>
</template>

<script>

import UserTable from './UserTable.vue';
import UserSide from './UserSide.vue';
import Header from './Header.vue';

export default {
    components:{
      'userside':UserSide,
      'usertable':UserTable,
	  'Header' :Header
  }
}
</script>

<style>

</style>

