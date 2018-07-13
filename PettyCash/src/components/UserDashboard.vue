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

export default {
    components:{
      'userside':UserSide,
      'usertable':UserTable,
  }
}
</script>

<style>

</style>

