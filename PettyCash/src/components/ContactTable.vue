<template>

	<!-- <adminside></adminside> -->
    <div>	
			
			
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin">
						<div class="column no-padding-bottom">
							<div class="ui  left icon input fluid">
                                <i class="search icon"></i>
                                <input type="text" placeholder="Search Contacts" v-model="search">
                                
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
							<tr v-for="post in filteredPosts" :key="post.title">
								<td>
									<i class="user icon"></i>
								</td>
								<td>{{post.name}}</td>
								<td>{{post.contact}}</td>
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
				</div>
			<!-- end of main changes -->
    </template>
	

<script>

import Header from './Header.vue';
import AdminSide from './AdminSide.vue';
import faker from 'faker'

export default {
  name: 'AdminInbox',
  data () {
    return {
		sortColumn: null,
		posts:[],
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
	for (let index = 0; index < 20; index++) {
		var post = {
			name: faker.name.findName(),
			contact: faker.phone.phoneNumber(),
			location: faker.address.city(),
			email: faker.internet.email(),
		}
		//console.log("fajsgdf",faker.random.number())
		this.posts.push(post)
	}
},
methods:{
	// Search: function(post) {
    //       return post.name.indexOf(this.search) != -1
    //       || post.contact.indexOf(this.search) != -1
	// 	  || post.location.indexOf(this.search) != -1
	// 	  || post.email.indexOf(this.search) != -1
    //       ;
    //   }
	sortBy (column) {
		this.sortColumn = column
	}
	
},
computed: {
	filteredPosts: function () {
    return this.posts.filter((post)=> {
		return post.name.match(this.search)
		|| post.contact.match(this.search)
		|| post.email.match(this.search)
		|| post.location.match(this.search)
    })
  },
  orderedPosts: function () {
    return _.orderBy(this.posts, this.sortColumn)
  }
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
