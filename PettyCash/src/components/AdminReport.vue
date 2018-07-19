<template>

	<!-- <adminside></adminside> -->
    <div>	
			
			<!-- this is for all the main changes -->
					<div class="ui relaxed grid no-margin z-depth-1" >
						<div class="column no-padding-bottom">
							<!-- <div class="ui secondary menu">
								<a href="" class="ui basic green button item">Forward</a>
                                <a href="" class="ui basic red button item">Reject</a>
							</div> -->
                            <!-- <sui-accordion style="padding-bottom:15px;">
                                <a is="sui-accordion-title">
                                    <sui-button positive  class="z-depth-1">MAKE A NEW REPORT</sui-button>
                                </a>
                                <sui-accordion-content>
                                    <reportform></reportform>
                                </sui-accordion-content>
                            </sui-accordion> -->
						</div>
					</div>
					
					<table class="ui basic striped table">
						<vue-scrolling-table>
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
							<tr v-for="post in posts" :key="post.title">
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
								<td> -->
									<!-- <sui-dropdown icon="ellipsis vertical">
										<sui-dropdown-menu class="left floated">
										<sui-dropdown-item><a href="" class="item">Approve</a></sui-dropdown-item>
										<sui-dropdown-item><a href="" class="item">Decline</a></sui-dropdown-item>
			
										</sui-dropdown-menu>
									</sui-dropdown> -->
								<!-- </td>
                                <td></td>
							</tr> -->
						</tbody>
						</vue-scrolling-table>
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
	for (let index = 0; index < 10; index++) {
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
.min-height-100{
min-height: 100vh;
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
}

.top-nav{
height: 64px;
}
</style>
