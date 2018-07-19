<template>
<div class="ui grid no-margin max-height-100">
    <adminside></adminside>
    <!-- <Header></Header> -->
    <div class="thirteen wide column no-padding" id="app">
      <Header></Header>
      <div class="tent">
      <transition name="component-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      </div>
    </div>
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.tent{
  padding-top:80px;
}

</style>

