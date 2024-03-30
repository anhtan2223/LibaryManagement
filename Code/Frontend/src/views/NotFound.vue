<template>
    <div class="text-center mt-10 not-found">
        <h2 style="color : black">OOPS , Không Tìm Thấy Trang </h2>
        <!-- <router-link to='/'>Trở về Trang Chủ</router-link> -->
        <a class="b" @click.prevent="router.go(-1)">
            <h3>
                Trở về trước 
            </h3>
        </a>
    </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<style>
    .not-found{
        align-items: center;
        /* background-color: bisque; */
    }
</style>