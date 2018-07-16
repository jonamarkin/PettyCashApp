<template>
<div class="ui grid no-margin min-height-100">
    <financeside></financeside>
    <!-- <Header></Header> -->
    <router-view></router-view>
</div>
</template>

<script>
import Header from './Header.vue';
import FinanceSide from './FinanceSide.vue';
import Finance from './Finance.vue';

export default {
  name: 'FinanceDash',
  data () {
    return {

    }
  },
  components:{
	  'Header':Header,
      'financeside':FinanceSide,
      'finance':Finance
  }
}
</script>

<style>

</style>

