<template>
  <div>
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
    margin-top: 10vh ;
    /* background: linear-gradient(to right , #c72092 , #6c14d0); */
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>