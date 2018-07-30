<template>
    <div>	
			<!-- <Header></Header> -->
			<!-- this is for all the main changes -->
					<table class="ui basic striped table">
						<thead>
							<tr>
								<!-- <th>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</th> -->
								
								<!-- <th>Payment Mode</th> -->
								<th>Amount</th>
								<th>Reason</th>
								<th>Datetime</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr  v-for="post in posts">
								<!-- <td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</td> -->
								
								<!-- <td>{{post.payment}}</td> -->
								<td>{{post.amount}}</td>
								<td>{{post.description}}</td>
								<td>{{post.dateNeeded}}</td>
								<td>{{post.status}}</td>
								<td><i class="trash alternate icon" @click="toggle"></i></td>
                                
							</tr>
                            
                                <!-- <tr id="collapse">
                                    <td colspan="6">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</td>
                                </tr> -->
							<!-- <tr>
								<! <td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</td> -->
								<!-- <td>{{name}}</td>
								<td>Cash Request</td>
								<td>10</td>
								<td>Gob3</td>
								<td>10-Jul-18 14:20</td>
								<td><i class="trash alternate icon" @click="toggle"></i></td>
							</tr> --> 
						</tbody>
					</table>
					<sui-modal basic v-model="open" size="mini" closeIcon="true" animation="fly down">
                        <!-- <sui-modal-header >REQUEST DETAILS</sui-modal-header> -->
                        <div class="ui icon header">
							<i class="archive icon"></i>
							Delete Request
						</div>
						<div class="content">
							<p>Are you sure you want to delete this request?</p>
						</div>
						<div class="actions">
							<div class="ui red basic cancel inverted button">
							<i class="remove icon"></i>
							No
							</div>
							<div class="ui green ok inverted button">
							<i class="checkmark icon"></i>
							Yes
							</div>
						</div>
                    </sui-modal>
				</div>
				
			<!-- end of main changes -->
    </template>
	


<script>

import Header from './Header.vue';
import UserSide from './UserSide.vue';
import faker from 'faker'
import axios from "axios";

export default {
  name: 'UserTable',
  data () {
	//   let users = []
	// 	for (var i = 0; i < 25; i++) {
	// users.push( buildFakeUser() )
	// 	}
    return { 
		// users,
		posts:[],
         open: false,
		 info:null 
		 };
},
  components:{
      'Header':Header,
      'userside':UserSide
  },
methods: {
    toggle() {
      this.open = !this.open;
	}
},
computed:{
	// posts () {
	// 	return this.$store.state.posts
	// }
},
created(){
	// this.$store.dispatch('fetchPosts')
	// 	.then(posts =>{

	// 	})
	// for (let index = 0; index < 20; index++) {
	// 	var post = {
			
	// 		// payment: faker.finance.transactionType(),
	// 		amount: faker.finance.amount(),
	// 		reason: faker.lorem.sentence(),
	// 		datetime: faker.date.recent(),
	// 		status: 'approved'
	// 	}
	// 	console.log("fajsgdf",faker.random.number())
	// 	this.posts.push(post)
	// }
	axios
      .get('https://pettycash.nfortics.com/api/cashrequest')
      .then(response => {
		this.posts = response.data
		
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
},

mounted () {
    // axios
    //   .get('https://pettycash.nfortics.com/api/cashrequest')
    //   .then(response => {
	// 	for (let index = 0; index < 20; index++) {
	// 	var post = {
    //     amount: response.amount,
	// 	description: response.description,
	// 	status: response.status,
	// 	datetime: response.datetime
	// 	}
	// 	this.posts.push(post)
	// 	}
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     this.errored = true
    //   })
      
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
