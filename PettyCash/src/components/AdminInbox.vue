<template>

	<!-- <adminside></adminside> -->
    <div>	
			
			
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin">
						<div class="column no-padding-bottom" >
							<div class="ui secondary menu">
								<a href="" class="ui button item googlelog">APPROVE</a>
								<a href="" class="ui reject button item">DECLINE</a>
							</div>
						</div>
					</div>
					
					<table class="ui basic striped table">
						<thead>
							<tr>
								<th>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example" v-model="selectAll">
									  	<label></label>
									</div>
								</th>
								<th>From</th>
								<!-- <th>Subject</th> -->
								<th>Amount</th>
								<th>Reason</th>
								<th>Datetime</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr  v-for="post in posts" :key="post.id">
								<td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example" v-model="selected" :value="post.id">
									  	<label></label>
									</div>
								</td>
								<td>{{post.from}}</td>
								<!-- <td>{{post.subject}}</td> -->
								<td>{{post.amount}}</td>
								<td>{{post.description}}</td>
								<td>{{post.dateNeeded}}</td>
								<td>
									<!-- <div class="ui dropdown">
										<i class="ellipsis vertical icon"></i>

										<div class="menu">
											<a href="" class="item">Approve</a>
											<a href="" class="item">Decline</a>
										</div>
									</div> -->
									<sui-dropdown icon="ellipsis vertical">
										<sui-dropdown-menu class="left floated">
										<sui-dropdown-item><a href="" class="item">Approve</a></sui-dropdown-item>
										<sui-dropdown-item><a href="" class="item">Decline</a></sui-dropdown-item>
			
										</sui-dropdown-menu>
									</sui-dropdown>
								</td>
							</tr>

							<!-- <tr>
								<td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</td>
								<td>Andy Cooxy</td>
								<td>Cash Request</td>
								<td>10</td>
								<td>Gob3</td>
								<td>10-Jul-18 14:20</td>
								<td>
									<sui-dropdown icon="ellipsis vertical">
										<sui-dropdown-menu class="left floated">
										<sui-dropdown-item><a href="" class="item">Approve</a></sui-dropdown-item>
										<sui-dropdown-item><a href="" class="item">Decline</a></sui-dropdown-item>
			
										</sui-dropdown-menu>
									</sui-dropdown>
								</td>
							</tr> -->
						</tbody>
					</table>
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
		posts:[],
		seen: false,
		checked: false,
		selected:[],
		anySelected:[]
    }
  },
  components:{
	  'Header':Header,
	  'adminside':AdminSide
  },
  computed:{
	posts () {
		return this.$store.state.posts
	},
	 selectAll: {
            get() {
				return this.posts ? this.selected.length == this.posts.length : false;
				
            },
            set(value) {
                var selected = [];

                if (value) {
                    this.posts.forEach(function (post) {
						selected.push(post.id);
						// seen=true;
					});
					
                }

				this.selected = selected;
				
            }
		},
		
},

methods: {
	showDiv(value){
			if(this.selected.length>1){
				seen=true;
			}
		}
},
created(){
	// this.$store.dispatch('fetchPosts')
	// 	.then(posts =>{

	// 	})
	// for (let index = 0; index < 10; index++) {
	// 	var post = {
	// 		from: faker.name.findName(),
	// 		// subject: faker.lorem.word(),
	// 		amount: faker.finance.amount(),
	// 		reason: faker.lorem.sentence(),
	// 		datetime: faker.date.recent()
	// 	}
	// 	console.log("fajsgdf",faker.random.number())
	// 	this.posts.push(post)
	// }
},
mounted(){
	axios
      .get('https://pettycash.nfortics.com/api/cashrequest')
      .then(response => {
		this.posts = response.data
		
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
