<template>

	<!-- <adminside></adminside> -->
    <div >	
			
		
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin z-depth-1" >
						<div class="column no-padding-bottom">
							<!-- <div class="ui secondary menu">
								<a href="" class="ui basic green button item">Forward</a>
                                <a href="" class="ui basic red button item">Reject</a>
							</div> -->
                            <sui-accordion style="padding-bottom:15px;">
                                <a is="sui-accordion-title">
                                    <sui-button style="background:#67AEE6!important; color:white;"  class="z-depth-1">MAKE A NEW REPORT</sui-button>
                                </a>
                                <sui-accordion-content>
                                    <reportform></reportform>
                                </sui-accordion-content>
                            </sui-accordion>
						</div>
					</div>
					
					<table class="ui basic striped table">
						<thead>
							<tr>
								<th>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</th>
								<th>Date</th>
								<th>Description</th>
								<th>Amount</th>
								<th>Category</th>
								<th>From</th>
								<th>To</th>
                                <th>Status</th>
							</tr>
						</thead>

						<tbody>
							<tr  v-for="post in posts" :key="post.title">
								<td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</td>
								<td>{{post.date}}</td>
								<td>{{post.description}}</td>
								<td>{{post.amount}}</td>
								<td>{{post.category}}</td>
								<td>{{post.from}}</td>
								<td>{{post.to}}</td>
								<td>{{post.status}}</td>
								<td>
									<!-- <div class="ui dropdown">
										<i class="ellipsis vertical icon"></i>

										<div class="menu">
											<a href="" class="item">Approve</a>
											<a href="" class="item">Decline</a>
										</div>
									</div> -->
									<!-- <sui-dropdown icon="ellipsis vertical">
										<sui-dropdown-menu class="left floated">
										<sui-dropdown-item><a href="" class="item">Forward</a></sui-dropdown-item>
										<sui-dropdown-item><a href="" class="item">Reject</a></sui-dropdown-item>
			
										</sui-dropdown-menu>
									</sui-dropdown> -->
								</td>
                                <td></td>
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
                                <td></td>
							</tr> -->
						</tbody>
					</table>
				</div>
			<!-- end of main changes -->
    </template>
	

<script>

import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import ReportForm from './ReportForm.vue';
import faker from 'faker'

export default {
  name: 'ReportDash',
  data () {
    return {
		posts:[]
    }
  },
  components:{
	  'Header':Header,
      'adminside':AdminSide,
      'reportform':ReportForm
  },
  computed:{
	posts () {
		return this.$store.state.posts
	}
},
created(){
	// this.$store.dispatch('fetchPosts')
	// 	.then(posts =>{

	// 	})
	for (let index = 0; index < 20; index++) {
		var post = {
			date: faker.date.recent(),
			description: faker.lorem.words(),
			amount: faker.finance.amount(),
			category: faker.company.companyName(),
			from: faker.name.findName(),
			to: faker.name.findName(),
			status: faker.commerce.productAdjective()
		}
		//console.log("fajsgdf",faker.random.number())
		this.posts.push(post)
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
