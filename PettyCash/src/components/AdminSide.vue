<template>
    <div class="three wide column no-padding light-grey" id="side-nav">
        <div class="u-full-width profile">
            <div class="profile-image center-block position-relative white">
                <img src="../assets/img/users/1.png" alt="" class="absolute-center">
            </div>
            <p class="center-align" style="color: #777">Esther Aburabura</p>
        </div>


        <!-- menus -->
        <div class="ui secondary vertical pointing menu u-full-width main-menu">
            <a class="active icon item">
                <i class="home icon"></i> INBOX
            </a>
            <a class="item">
                <i class="money bill alternate outline icon"></i> PAYMENTS
            </a>
            <a class="item">
                <i class="address book outline icon"></i> CONTACTS
            </a>

            <a class="item">
                <i class="cog icon"></i> SETTINGS
            </a>

            <a class="item">
                <i class="address book outline icon"></i> CONTACTS
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AdminSide',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
