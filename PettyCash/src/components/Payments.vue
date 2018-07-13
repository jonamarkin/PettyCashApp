<template>

	<!-- <adminside></adminside> -->
    <div class="thirteen wide column no-padding" id="app">	
		<Header></Header>
	<div class="form-body">
   		<sui-card class="u-full-width u-full-height green">
      	<sui-card-content>
	   		<sui-card-header>PAYMENT DETAILS</sui-card-header>
        		<sui-card-description>
					<form class="ui form" >
						<div class="two fields">
							<div class="field">
								<label>Account Name</label>
								<input placeholder="Jonathan Markin" type="text">
							</div>  
						</div>
						<div class="field">
							<div class="two fields">
								<div class="field">
									<label>Currency</label>
									<select class="ui fluid dropdown">
										<option value="">GHC</option>
										<option value="WA">USD</option>
										<option value="WV">EUR</option>
										<option value="WI">NIA</option>
									</select>
								</div>
					
								<div class="field">
									<label>Amount</label>
									<input placeholder="90.00" type="text">
								</div>
							</div>
						</div>

						<div class="two fields">
							<div class="field">
								<label>Method of Transaction</label>
								<select class="ui fluid dropdown">
									<option value="">Vodafone Cash</option>
									<option value="WA">MTN Mobile Money</option>
									<option value="WV">Tigo Cash</option>
									<option value="WI">Airtel Money</option>
								</select>
							</div>
						

							<div class="field">
								<label>Mobile Number</label>
								<input type="tel">
							</div>  
						</div>

						<div class="two fields">
							<div class="field">
								<label>Date</label>
								<datepicker></datepicker>
							</div>  
							<div class="field">
								<label>Voucher(Optional)</label>
								<input type="text">
							</div>
						</div>
					
							
						<div class="field center-align">
							<div class="ui buttons">
								<button class="ui button">Cancel</button>
								<div class="or"></div>
								<button class="ui positive button">Send</button>
							</div>
						</div>
					</form>
        		</sui-card-description>
      		</sui-card-content>
    	</sui-card>
	</div>	
</div>	
</template>
	

<script>

import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import Datepicker from '../../node_modules/vuejs-datepicker';

export default {
  name: 'AdminInbox',
  data () {
    return {

    }
  },
  components:{
	  'Header':Header,
	  'adminside':AdminSide,
	   Datepicker
  }
}

// $(".ui.dropdown").dropdown();
</script>
<style lang="stylus" scoped>
.buttons{
	padding-top:5%;
}
label{
	font-size:15px!important;
}
h4{
	font-size:20px!important;
	padding-left:10%!important;
	
}
.form-body{
	padding:5% 10% 0 10%!important;
}
select, input{
	border-radius:0px!important;
}

</style>
