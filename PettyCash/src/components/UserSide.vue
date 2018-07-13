<template>
		<div class="three wide column no-padding light-grey" id="side-nav">
			<div class="u-full-width profile">
				<div class="profile-image center-block position-relative white">
					<img src="../assets/img/users/1.png" alt="" class="absolute-center" >
				</div>
				<p class="center-align" style="color: #777">Esther Aburabura</p>
			</div>


			<!-- menus -->
			<div class="ui secondary vertical pointing menu u-full-width main-menu ">
			  	<a class=" active icon item" href="">
			    	<i class="home icon"></i> INBOX
			  	</a>
			  	<a class="item ">
			    	<sui-button positive @click.native="toggle" class="z-depth-1">MAKE A NEW REQUEST</sui-button>
                        <sui-modal v-model="open" >
                        <sui-modal-header >REQUEST FORM</sui-modal-header>
                        <sui-modal-content>
                            <sui-modal-description>
                                <sui-form>
                                    <sui-form-field>
                                    <label>Date</label>
                                    <!-- <input type="text" v-date="date" placeholder="Date Money is Needed"  v-pikaday> -->
                                    <!-- <datepicker :format="customFormatter"></datepicker> -->
                                    <datepicker></datepicker>
                                    </sui-form-field>
                                    <sui-form-field>
                                    <label>Amount</label>
                                    <input placeholder="Amount Needed"  type="number">
                                    </sui-form-field>
                                    <sui-form-field class="right floated">
                                    <label>Description</label>
                                    <textarea rows="3"></textarea>
                                    </sui-form-field>
                                    <sui-button positive type="submit" content="Submit Request" />
                                </sui-form>
                            </sui-modal-description>
                        </sui-modal-content>
                        <sui-modal-actions>
                        </sui-modal-actions>
                    </sui-modal>
			  	</a>
			</div>
		</div>
		<!-- <usertable></usertable>                 -->

			<!-- end of main changes -->
		
</template>


<script>
import UserTable from './UserTable.vue';
import AdminInbox from './AdminInbox.vue';
import Datepicker from '../../node_modules/vuejs-datepicker';
// import Header from './Header.vue';
export default {
  name: 'AdminSide',
  data () {
    return { 
         open: false };
},
  components:{
      'admininbox':AdminInbox,
      'usertable':UserTable,
      Datepicker
	//   'Header' :Header
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    customFormatter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
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
