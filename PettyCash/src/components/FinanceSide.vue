<template>
		<div class="three wide column no-padding light-grey" id="side-nav">
			<div class="u-full-width profile">
				<div class="profile-image center-block position-relative white">
					<img src="../assets/img/users/Artboard 23.png" alt="" class="absolute-center">
				</div>
				<p class="center-align" style="color: #777">Rachael</p>
			</div>


			<!-- menus -->
			<sui-menu pointing secondary vertical class="main-menu u-full-width">
			<!-- <div class="ui secondary vertical menu u-full-width main-menu"> -->
				<sui-menu-menu>
			  		<router-link :to="{ name: 'Finance'}"><a is="sui-menu-item"
					:active="isActive('INBOX')"
					content="INBOX"
					@click="select('INBOX')" >
			    		<i class="home icon"></i> INBOX
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
                  	<router-link :to="{ name: 'Payments'}"><a is="sui-menu-item"
					:active="isActive('PAYMENTS')"
					content="PAYMENTS"
					@click="select('PAYMENTS')" >
			    		<i class="money bill alternate icon" ></i> PAYMENTS
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
			  		<router-link :to="{ name: 'ContactTable'}"><a is="sui-menu-item"
					:active="isActive('CONTACTS')"
					content="CONTACTS"
					@click="select('CONTACTS')" >
			    		<i class="address book outline icon"></i> CONTACTS
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
					<router-link :to="{ name: 'ReportDash'}"><a is="sui-menu-item"
					:active="isActive('REPORTS')"
					content="REPORTS"
					@click="select('REPORTS')" >
						<i class="book icon"></i> REPORTS
					</a></router-link>
				</sui-menu-menu>
			<!-- </div> -->
			</sui-menu>
		</div>
		
       <!-- <admininbox></admininbox> -->              

			<!-- end of main changes -->
		
</template>


<script>
import AdminInbox from './AdminInbox.vue';
// import Header from './Header.vue';
export default {
  name: 'FinanceSide',
  data () {
    return {
      active: 'INBOX',
    //   items: ['Home', 'Messages', 'Friends'] 
    }
  },
  components:{
	  'admininbox':AdminInbox,
	//   'Header' :Header
  },
   methods:{
	  isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
