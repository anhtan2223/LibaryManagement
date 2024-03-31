<template>
    <Navigation />
    <div class="container">
        <!-- Nav pills -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active">Thông tin cá nhân</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="$router.push('./card')">Quản lý thẻ mượn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="$router.push('./search')">Tra cứu sách</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane container active">
                <h1>Chôm từ code kia</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navigation from "../../components/Navigation.vue";
</script>

<style scoped>
.container {
    position: relative;
    top: 56px;
    width: 70vw;
    margin: 8% 15%;
}

</style>
