<template>

	<!-- <adminside></adminside> -->
    <div>	
			
			
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin">
						<div class="column no-padding-bottom">
							<div class="ui  left icon input fluid">
                                <i class="search icon"></i>
                                <input type="text" placeholder="Search Contacts" v-model="search">
                                <sui-button  class="add ui button z-depth-1"  @click.native="toggle"><i class="icon user"></i> Add New Contact</sui-button>
                            </div>
							
						</div>
					</div>
					<table class="ui basic striped table max-height-100" style="overflow-y:scroll;" >
						
						<thead>
							<tr>
								<th >
							
								</th>
								<th v-for="column in columns">{{column}}</th>
								<!-- <th>Contact</th>
								<th>Location</th>
								<th>Email</th> -->
							
							</tr>
						</thead>

						<tbody>
							<tr v-for="post in filteredPosts" :key="post.name">
								<td>
									<i class="user icon"></i>
								</td>
								<td>{{post.name}}</td>
								<td>{{post.phoneNumber}}</td>
								<!-- <td>{{post.location}}</td> -->
								<td>{{post.email}}</td>
								
							</tr>

							<!-- <tr>
								<td>
									<i class="user icon"></i>
								</td>
								<td>Andy Cooxy</td>
								<td>Cash Request</td>
								<td>10</td>
								<td>Gob3</td>
			
							</tr> -->
						</tbody>
						
					</table>
					<sui-modal v-model="open"  >
                        <sui-modal-header style="color:#67AEE6!important">ADD NEW CONTACT</sui-modal-header>
                        <sui-modal-content>
                            <sui-modal-description>
                                <sui-form @submit.prevent="addNewContact">
                                    <sui-form-field>
                                    <label>Name</label>
                                    <input type="text" placeholder="Name of contact" v-model="name">
                                    <!-- <datepicker :format="customFormatter"></datepicker> -->
                                    <!-- <datepicker v-model="dateNeeded"></datepicker> -->
                                    </sui-form-field>
                                    <sui-form-field>
                                    <label>Contact</label>
                                    <input placeholder="Amount Needed" type="number" v-model="phoneNumber">
                                    </sui-form-field>
                                    <sui-form-field>
                                    <label>Email</label>
                                    <input placeholder="Email Address" type="email" v-model="email">
                                    </sui-form-field>
                                    <sui-button style="background:#67AEE6!important; color:white;" type="submit" content="Submit Request" @click.native="toggle"/>
                                </sui-form>
                            </sui-modal-description>
                        </sui-modal-content>
                        <sui-modal-actions>
                        </sui-modal-actions>
                    </sui-modal>

				</div>
			<!-- end of main changes -->
    </template>
	

<script>

import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import faker from 'faker'
import axios from "axios";

export default {
  name: 'AdminInbox',
  data () {
    return {
		name:'',
		phoneNumber:'',
		email:'',
		sortColumn: null,
		posts:[],
		 open: false,
		search:'',
		columns: ['Names', 'Contact', 'Email'],
    }
  },
  components:{
	  'Header':Header,
	  'adminside':AdminSide
  },
  created(){
	// this.$store.dispatch('fetchPosts')
	// 	.then(posts =>{

	// 	})
	// for (let index = 0; index < 20; index++) {
	// 	var post = {
	// 		name: faker.name.findName(),
	// 		contact: faker.phone.phoneNumber(),
	// 		location: faker.address.city(),
	// 		email: faker.internet.email(),
	// 	}
	// 	//console.log("fajsgdf",faker.random.number())
	// 	this.posts.push(post)
	// }

	axios
      .get('https://pettycash.nfortics.com/api/user')
      .then(response => {
		this.posts = response.data
		
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
},
methods:{
	 toggle() {
      this.open = !this.open;
    },
	// Search: function(post) {
    //       return post.name.indexOf(this.search) != -1
    //       || post.contact.indexOf(this.search) != -1
	// 	  || post.location.indexOf(this.search) != -1
	// 	  || post.email.indexOf(this.search) != -1
    //       ;
    //   }
	sortBy (column) {
		this.sortColumn = column
	},

	addNewContact(){
      axios({
    method: 'post',
    url: 'https://pettycash.nfortics.com/api/user',
    data: {
      name: this.name,
      phoneNumber: this.phoneNumber,
      email: this.email
  }
});
    }
	
},
computed: {
	filteredPosts: function () {
    return this.posts.filter((response)=> {
		return response.name.match(this.search)
		|| response.phoneNumber.match(this.search)
		|| response.email.match(this.search)
    })
  },
//   orderedPosts: function () {
//     return _.orderBy(this.posts, this.sortColumn)
//   }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
th:hover{
	cursor:pointer!important;
	text-decoration: underline;
}
</style>
