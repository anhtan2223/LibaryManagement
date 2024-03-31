
<script setup>
    import Sidebar from "../components/Sidebar.vue"
    import Navigation from '../components/Navigation.vue'

</script>

<template>    
  <Navigation></Navigation>
  <div class="container">
      <h1>
        HomeView
      </h1>
      <button 
      type="button" 
      class="btn btn-outline-info"
      @click = "$router.push('/login')"
      >
        Login
      </button>
      <button 
      type="button" 
      class="btn btn-outline-info"
      @click = "$router.push('/signin')"
      >
        Sign In
      </button>
      <button 
      type="button" 
      class="btn btn-outline-info"
      @click = "$router.push('/admincategory')"
      >
        admincategory
      </button>

  </div>
</template>