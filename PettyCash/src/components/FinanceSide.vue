<template>
		<div class="three wide column no-padding light-grey" id="side-nav">
			<div class="u-full-width profile">
				<div class="profile-image center-block position-relative white">
					<img src="../assets/img/users/1.png" alt="" class="absolute-center">
				</div>
				<p class="center-align" style="color: #777">Rachael</p>
			</div>


			<!-- menus -->
			<sui-menu pointing secondary vertical class="main-menu u-full-width">
			<!-- <div class="ui secondary vertical menu u-full-width main-menu"> -->
				<sui-menu-menu>
			  		<router-link :to="{ name: 'Finance'}"><a is="sui-menu-item"
					:active="isActive('INBOX')"
					content="INBOX"
					@click="select('INBOX')" >
			    		<i class="home icon"></i> INBOX
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
                  	<router-link :to="{ name: 'Payments'}"><a is="sui-menu-item"
					:active="isActive('PAYMENTS')"
					content="PAYMENTS"
					@click="select('PAYMENTS')" >
			    		<i class="money bill alternate icon" ></i> PAYMENTS
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
			  		<router-link :to="{ name: 'ContactTable'}"><a is="sui-menu-item"
					:active="isActive('CONTACTS')"
					content="CONTACTS"
					@click="select('CONTACTS')" >
			    		<i class="address book outline icon"></i> CONTACTS
			  		</a></router-link>
				</sui-menu-menu>
				<sui-menu-menu>
					<router-link :to="{ name: 'ReportDash'}"><a is="sui-menu-item"
					:active="isActive('REPORTS')"
					content="REPORTS"
					@click="select('REPORTS')" >
						<i class="book icon"></i> REPORTS
					</a></router-link>
				</sui-menu-menu>
			<!-- </div> -->
			</sui-menu>
		</div>
		
       <!-- <admininbox></admininbox> -->              

			<!-- end of main changes -->
		
</template>


<script>
import AdminInbox from './AdminInbox.vue';
// import Header from './Header.vue';
export default {
  name: 'FinanceSide',
  data () {
    return {
      active: 'INBOX',
    //   items: ['Home', 'Messages', 'Friends'] 
    }
  },
  components:{
	  'admininbox':AdminInbox,
	//   'Header' :Header
  },
   methods:{
	  isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
