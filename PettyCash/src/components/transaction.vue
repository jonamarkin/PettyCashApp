<template>
<div class="ui grid no-margin min-height-100">
    <financeside></financeside>
    <payments></payments>
</div>
</template>
<script>
import Payments from './Payments.vue';
import AdminSide from './AdminSide.vue';
import FinanceSide from './FinanceSide.vue';
export default {
    components:{
        'adminside':AdminSide,
        'payments':Payments,
        'financeside':FinanceSide
    }
}
</script>
<style lang="stylus" scoped>

</style>
