<template>
<!-- <sui-sidebar visible="true"> -->
		<div class="three wide column no-padding light-grey" id="side-nav">
			<div class="u-full-width profile">
				<div class="profile-image center-block position-relative white">
					<img src="../assets/img/users/Artboard 23.png" alt="" class="absolute-center" >
				</div>
				<p class="center-align" style="color: #777">Esther Aburabura</p>
			</div>


			<!-- menus -->
      
			<sui-menu pointing secondary vertical class="main-menu u-full-width">
			<!-- <div class="ui secondary vertical menu u-full-width main-menu"> -->
				<sui-menu-menu>
			  		<router-link :to="{ name: 'UserTable'}"><a is="sui-menu-item"
              :active="isActive('INBOX')"
              content="INBOX"
              @click="select('INBOX')" >
			    		<i class="home icon"></i> INBOX
			  		</a></router-link>
				</sui-menu-menu>
			  	<a class="item ">
			    	<sui-button  @click.native="toggle" class="z-depth-1" style="background:#67AEE6!important; color:white;">MAKE A NEW REQUEST</sui-button>
                    <sui-modal v-model="open"  >
                        <sui-modal-header >REQUEST FORM</sui-modal-header>
                        <sui-modal-content>
                            <sui-modal-description>
                                <sui-form @submit.prevent="sendData">
                                    <sui-form-field>
                                    <label>Date</label>
                                    <!-- <input type="text" v-date="date" placeholder="Date Money is Needed"  v-pikaday> -->
                                    <!-- <datepicker :format="customFormatter"></datepicker> -->
                                    <datepicker v-model="dateNeeded"></datepicker>
                                    </sui-form-field>
                                    <sui-form-field>
                                    <label>Amount</label>
                                    <input placeholder="Amount Needed"  type="number" v-model="amount">
                                    </sui-form-field>
                                    <sui-form-field class="right floated">
                                    <label>Description</label>
                                    <textarea rows="3" v-model="description"></textarea>
                                    </sui-form-field>
                                    <sui-button style="background:#67AEE6!important; color:white;" type="submit" content="Submit Request"/>
                                </sui-form>
                            </sui-modal-description>
                        </sui-modal-content>
                        <sui-modal-actions>
                        </sui-modal-actions>
                    </sui-modal>
			  	</a>
        </sui-menu>
		</div>
  <!-- </sui-sidebar> -->
		<!-- <usertable></usertable>                 -->

			<!-- end of main changes -->
		
</template>


<script>
import UserTable from './UserTable.vue';
import AdminInbox from './AdminInbox.vue';
import Datepicker from '../../node_modules/vuejs-datepicker';
import axios from "axios";
// import Header from './Header.vue';
export default {
  name: 'AdminSide',
  data () {
    return {
          dateNeeded: '',
          amount: '',
          description:'',
         open: false,
         active: 'INBOX',
         posts:[],
      items: ['Home', 'Messages', 'Friends'] 
      };
},
  components:{
      'admininbox':AdminInbox,
      'usertable':UserTable,
      Datepicker
	//   'Header' :Header
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    customFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    },
    // sendData() {
    //             axios({ method: "POST", "url": "https://pettycash.nfortics.com/api/cashrequest", "data": this.input,  "headers": { "content-type": "application/json" } }).then(result => {
    //                 this.response = result.data;
    //             }, error => {
    //                 console.error(error);
    //             });
    //         }

    // sendData(){
    //   axios.post('https://pettycash.nfortics.com/api/cashrequest', 
    //   this.dateNeeded,
    //   this.amount,
    //   this.description, // the data to post
    //   { //headers: {
    //   //   'Content-type': 'application/json',
    //   //   }
    //   }).then(response =>this.posts = response.data);
    //   }
    // sendData(){
    //   console.log('Kwame')
    //   let axiosConfig = {
    //   headers: {
    //       'Content-Type': 'application/json;charset=UTF-8',
    //       "Access-Control-Allow-Origin": "*",
    //   }
    // };
    //   axios.post('https://pettycash.nfortics.com/api/cashrequest', {
    //   dateNeeded: this.dateNeeded,
    //   amount: this.amount,
    //   description: this.description
    // },
    // axiosConfig)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // }

    sendData(){
      axios({
    method: 'post',
    url: 'https://pettycash.nfortics.com/api/cashrequest',
    data: {
      dateNeeded: this.dateNeeded,
      amount: this.amount,
      description: this.description
  }
});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
