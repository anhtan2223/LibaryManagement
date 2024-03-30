<template>
  <div>
    <div class="app-nav">
      <Navigation></Navigation>
    </div>
    <div class="main-body">
      <RouterView></RouterView>  
    </div>
  </div>
</template>

<script setup>
  import Navigation from './components/Navigation.vue'
</script>

<style>
.main-body {
    margin-top: 15vh ;
    /* background: linear-gradient(to right , #c72092 , #6c14d0); */
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>