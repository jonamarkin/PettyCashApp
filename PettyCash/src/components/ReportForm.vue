<template>
<sui-form >
    <sui-form-field >
        <div class="three fields">
            <div class="field">
            <label>Date</label>
            <!-- <input type="text" v-date="date" placeholder="Date Money is Needed"  v-pikaday> -->
            <!-- <datepicker :format="customFormatter"></datepicker> -->
                <datepicker></datepicker>
            </div>
            <div class="field">
            <label>Policy</label>
            <select class="ui fluid search dropdown" name="category">
                <option value=""></option>
                <option value="1">Nfortics</option>
                <option value="2">Onango</option>
            </select>
            </div>
            <div class="field">
            <label>Amount</label>
            <input type="number" placeholder="Amount">
            </div>
        </div>
    </sui-form-field>
    <sui-form-field class="right floated">
        <div class="two fields">
            <div class="field">
            <label>Description</label>
            <!-- <input type="text" v-date="date" placeholder="Date Money is Needed"  v-pikaday> -->
            <!-- <datepicker :format="customFormatter"></datepicker> -->
            <textarea rows="2"></textarea>
            </div>
            <div class="field">
            <label>Comment</label>
            <textarea rows="2"></textarea>
            </div>
        </div>
    </sui-form-field>
    <sui-button positive type="submit" content="Submit Report" />
    <!-- <div class="ui form">
  
</div> -->
</sui-form>
</template>

<script>
import Datepicker from '../../node_modules/vuejs-datepicker';
export default {
    name:'ReportForm',
    components:{
    //   'admininbox':AdminInbox,
    //   'usertable':UserTable,
      Datepicker
}
}
</script>

<style>

</style>

