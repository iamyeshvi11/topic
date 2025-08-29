<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="text-dark">
       <b-navbar-brand href="#">HIRE3X</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Assessment</b-nav-item>          
          
        </b-navbar-nav>

      
         <b-navbar-nav class="ml-auto">
          
          <b-avatar src="https://placekitten.com/300/300"></b-avatar>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  
</template>

<script>
import {

  BCollapse,
  BNavbarNav,
  BNavItem,
  BNavForm,
  BFormInput,
  BButton,
  BNavItemDropdown,
  BDropdownItem
} from 'bootstrap-vue';

export default {
  name: ' BNavbarToggle',
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavForm,
    BFormInput,
    BButton,
    BNavItemDropdown,
    BDropdownItem
  }
</script>


