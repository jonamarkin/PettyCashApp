<template>

	<!-- <adminside></adminside> -->
    <div>	
			
			
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin">
						<div class="column no-padding-bottom">
							<div class="ui right action left icon input fluid">
                                <i class="search icon"></i>
                                <input type="text" placeholder="Search Contacts" v-model="search">
                                <button class="ui positive button">Search</button>
                            </div>
						</div>
					</div>
					<table class="ui basic striped table max-height-100" style="overflow-y:scroll;" >
						
						<thead>
							<tr>
								<th >
							
								</th>
								<th>Names</th>
								<th>Contact</th>
								<th>Location</th>
								<th>Email</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="post in filteredPosts " :key="post.title">
								<td>
									<i class="user icon"></i>
								</td>
								<td>{{post.name}}</td>
								<td>{{post.contact}}</td>
								<td>{{post.location}}</td>
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
		posts:[],
		search:''
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

	
},
computed: {
	filteredPosts: function () {
    return this.posts.filter((post)=> {
		return post.name.match(this.search)
		|| post.contact.match(this.search)
		|| post.email.match(this.search)
		|| post.location.match(this.search)
    })
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.table{
    border-left: none!important;
    border-right: none!important;
    border-radius: 0px!important;
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');

a,
p,
h1,h2,h3,h4,
small,
label{
color: #777!important;
font-family: 'Open Sans', sans-serif!important;
}

/*display*/
.display-block{
display: block!important;
}

.display-flex{
display: flex!important
}


/*padding*/
.no-padding{
padding: 0px!important;
}

.no-padding-bottom{
padding-bottom: 0px!important;
}

/*margin*/
.no-margin{
margin: 0px!important;
}

.no-margin-bottom {
margin-bottom: 0px!important;
}


/*shadows*/
.z-depth {
box-shadow: 5px 5px 25px 0 rgba(46,61,73,0.2) !important;
}

.z-depth-1{
box-shadow: 1px 2px 5px rgba(0,0,0,0.15)!important;
}

/*colors*/
.blue-text {
color: #67AEE6!important;
}

.blue-background{
background: #67AEE6!important;
}

.white-text{
color: #fff!important;
}
.white{
background: #fff!important;
}
.light-grey{
background: #fafafa!important;
}

/*width*/
.u-full-width{
width: 100%!important;
}

/*height*/
.u-full-height{
height: 100%!important;
}
.max-height-100{
max-height: 100vh;
}

/*typograph*/
.center-align{
text-align: center!important;
}
.left-align{
text-align: left!important;
}
.right-align{
text-align: right!important;
}


/*position*/
.position-relative{
position: relative!important;
}

.vertically-center{
position: absolute !important;
width: auto !important;
top: 50% !important;
left: 50% !important;
transform: translate(-50%, -50%) !important;
}

.absolute-center {
position: absolute !important;
width: 100% !important;
top: 50% !important;
transform: translateY(-50%) !important;
}

/*media*/
.center-block{
display: block!important;
margin: 0px auto;
}


/*form*/
button.rounded,
input.rounded,
textarea.rounded{
border-radius: 25px!important;
}



/*custom*/
.profile{
padding: 20px 10px;
}
.profile-image{
width: 75px;
height: 75px;
overflow: hidden;
border-radius: 50%;
}
.main-menu .item i{
float: none!important;
margin-left: 0px!important;
margin-right: 10px!important;
}

#app {
overflow-x: hidden;
/* padding-top:70px; */
}

.top-nav{
height: 64px;
}
</style>
