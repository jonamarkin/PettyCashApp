<template>
 <sui-modal v-model="open" >
    <sui-modal-header >REQUEST FORM</sui-modal-header>
    <sui-modal-content>
        <sui-modal-description>
            <sui-form>
                <sui-form-field>
                <label>Date</label>
                <!-- <input type="text" v-date="date" placeholder="Date Money is Needed"  v-pikaday> -->
                <!-- <datepicker :format="customFormatter"></datepicker> -->
                <datepicker></datepicker>
                </sui-form-field>
                <sui-form-field>
                <label>Amount</label>
                <input placeholder="Amount Needed"  type="number">
                </sui-form-field>
                <sui-form-field class="right floated">
                <label>Description</label>
                <textarea rows="3"></textarea>
                </sui-form-field>
                <sui-button primary type="submit" content="Submit Request" />
            </sui-form>
        </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
    </sui-modal-actions>
</sui-modal>

</template>

<script>
export default {
    name: 'Modal',
  data () {
    return { 
         open: false };
},
     methods: {
    toggle() {
      this.open = !this.open;
    }
}
}
</script>


<style>

</style>

