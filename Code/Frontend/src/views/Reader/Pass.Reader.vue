<template>
    <Nav></Nav>
    <ChangePass :info="info"></ChangePass>
</template>

<script setup >
import {ref} from 'vue'
import Nav from '../../components/Navigation.Reader.vue'
import ChangePass from '../../components/ChangePassword.vue'
const info = ref(JSON.parse(sessionStorage.info))
</script>

<style>

</style>