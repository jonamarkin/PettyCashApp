<template>
<div class="ui grid no-margin max-height-100">
    <financeside></financeside>
    <!-- <Header></Header> -->
     <div class="thirteen wide column no-padding" id="app">
      <Header></Header>
      <div class="tent">
      <transition name="component-fade" mode="out-in">
       <!-- <div v-show="loading"><pulse-loader :loading="loading" :color="blue" :size="small"></pulse-loader></div> -->
        <router-view></router-view>
      </transition>
      </div>
    </div>
</div>
</template>

<script>
import Header from './Header.vue';
import FinanceSide from './FinanceSide.vue';
import Finance from './Finance.vue';
import PulseLoader from '../../node_modules/vue-spinner/src/PulseLoader.vue'

export default {
  name: 'FinanceDash',
  data () {
    return {
      // loading:false
    }
  },
  components:{
	  'Header':Header,
      'financeside':FinanceSide,
      'finance':Finance,
      PulseLoader
  },
  // beforeRouteEnter (to, from, next) {
  //   this.loading=false
  // }
  // beforeResolve(to, from, next){
  //   NProgress.start()
  //    next()
  // },
  // afterEach(to, from){
  //   NProgress.done()
  // }


}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.0);
  }
  100% {
    transform: scale(1);
  }
}

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

