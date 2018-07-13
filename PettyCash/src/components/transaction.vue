<template>
<div class="ui grid no-margin min-height-100">
    <adminside></adminside>
    <payments></payments>
</div>
</template>
<script>
import Payments from './Payments.vue';
import AdminSide from './AdminSide.vue';
export default {
    components:{
        'adminside':AdminSide,
        'payments':Payments
    }
}
</script>
<style lang="stylus" scoped>

</style>
