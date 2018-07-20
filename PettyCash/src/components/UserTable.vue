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
								<th>Subject</th>
								<th>Payment Mode</th>
								<th>Amount</th>
								<th>Reason</th>
								<th>Datetime</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr  v-for="post in posts" :key="post.title" >
								<!-- <td>
									<div class="ui checkbox">
									  	<input type="checkbox" name="example">
									  	<label></label>
									</div>
								</td> -->
								<td>{{post.subject}}</td>
								<td>{{post.payment}}</td>
								<td>{{post.amount}}</td>
								<td>{{post.reason}}</td>
								<td>{{post.datetime}}</td>
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
         open: false };
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
	for (let index = 0; index < 20; index++) {
		var post = {
			subject: faker.lorem.word(),
			payment: faker.finance.transactionType(),
			amount: faker.finance.amount(),
			reason: faker.lorem.sentence(),
			datetime: faker.date.recent()
		}
		console.log("fajsgdf",faker.random.number())
		this.posts.push(post)
	}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

tr.collapse.in {
  display:table-row;
}

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
font-family: Gotham !important;
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

tr:hover{
	cursor:pointer;
}
</style>
