<template>
<div class="ui grid no-margin min-height-100">
    <adminside></adminside>
    <reportdash></reportdash>
</div>
</template>

<script>
// import Report from './Header.vue';
import AdminSide from './AdminSide.vue';
import ReportDash from './ReportDash.vue';
import FinanceSide from './FinanceSide.vue';

export default {
    name: 'ReportPage',
    components:{
        'adminside':AdminSide,
        'financeside':FinanceSide,
        'reportdash':ReportDash
    }
}
</script>

<style>

</style>

