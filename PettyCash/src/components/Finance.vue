<template>

	<!-- <adminside></adminside> -->
   	
			
			<div>
				<pulse-loader :loading="loading" :color="blue" :size="small" v-show="show" v-bind="show"></pulse-loader>
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin">
						<div class="column no-padding-bottom">
							<div class="ui secondary menu">
								<a href="" class="ui basic primary button item">FORWARD</a>
                                <a href="" class="ui basic red button item">REJECT</a>
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
								
								<th>Amount</th>
								<th>Reason</th>
								<th>Datetime</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="post in posts" :key="post.title">
								<td>
									<div class="ui checkbox" >
									  	<input type="checkbox" name="example" v-model="selected" :value="post.from">
									  	<label></label>
									</div>
								</td>
								<td>{{post.from}}</td>
								
								<td>{{post.amount}}</td>
								<td>{{post.reason}}</td>
								<td>{{post.datetime}}</td>
								<td>{{post.status}}</td>
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
										<sui-dropdown-item><a href="" class="item">Forward</a></sui-dropdown-item>
										<sui-dropdown-item><a href="" class="item">Reject</a></sui-dropdown-item>
			
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
import PulseLoader from '../../node_modules/vue-spinner/src/PulseLoader.vue'
import faker from 'faker'

export default {
  name: 'AdminInbox',
  data () {
    return {
		show:false,
		posts:[],
		selected:[],
    }
  },
  components:{
	  'Header':Header,
	  'adminside':AdminSide,
	  PulseLoader
  },
  computed:{
	// posts () {
	// 	return this.$store.state.posts
	// }
	selectAll: {
            get() {
				return this.posts ? this.selected.length == this.posts.length : false;
				
            },
            set(value) {
                var selected = [];

                if (value) {
                    this.posts.forEach(function (post) {
						selected.push(post.from);
						// seen=true;
					});
					
                }

				this.selected = selected;
				
            }
		},
		
},
created(){
	// this.$store.dispatch('fetchPosts')
	// 	.then(posts =>{

	// 	})
	for (let index = 0; index < 20; index++) {
		var post = {
			from: faker.name.findName(),
			// subject: faker.lorem.word(),
			amount: faker.finance.amount(),
			reason: faker.lorem.sentence(),
			datetime: faker.date.recent(),
			status: 'Approved'
		}
		console.log("fajsgdf",faker.random.number())
		this.posts.push(post)
	}
},
beforeMount() {
    this.show=!show;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
