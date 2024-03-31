<script setup>
import Sidebar from "../components/Sidebar.vue";
import Navigation from "../components/Navigation.vue";
</script>

<template>
    <div class="navigationbar">
        <Navigation></Navigation>
    </div>
    
    <div class="container">
      <h1>HomeView</h1>
      <button
          type="button"
          class="btn btn-outline-info"
          @click="$router.push('/login')">
          Login
      </button>
    </div>
</template>

<style scoped>
.container {
  margin-top: 15vh;
}
</style>
