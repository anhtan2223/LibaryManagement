<script setup lang="ts">
  
</script>

<template>
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

  </div>
</template>