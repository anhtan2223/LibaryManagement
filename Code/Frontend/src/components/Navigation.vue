<template class="Test">
    <div class="fixed">
        <nav class="navbar navbar-expand-lg navbar-white bg-white">
            <div class="container-fluid" id="nav-before-login">
                <span class="navbar-brand" href="#" @click="$router.push('/')">
                    <!-- <img src="../img/Logo.png" alt="" width="" height="100" class="d-inline-block align-text-top" > -->
                    Libary
                </span>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse NavMove" id="navbarNav">
                    <ul
                        class="navbar-nav"
                        v-for="navItem in data"
                        :key="navItem">
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                @click="$router.push(navItem.to)">
                                <i :class="navItem.icon"></i>
                                {{ navItem.name }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    nav1: { name: "Thư Viện", to: "/", icon: "fas fa-book" },
    nav2: { name: "Đăng Nhập", to: "/login", icon: "None" },
    nav3: { name: "Đăng Kí", to: "/signin", icon: "None" },
});
</script>

<style>
.NavMove {
    display: flex;
    justify-content: end;
}
.navbar-nav > li {
    padding-right: 30px;
}

.navbar {
    box-shadow: 0 0 30px rgb(82, 39, 82);
    background-color: #333;
}
.navbar-brand {
    cursor: pointer;
}

.nav-item a {
    cursor: pointer;
}

.fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 200;
}
.navbar-nav a {
    color: rgb(221, 40, 40);
}
.navbar-nav a:hover {
    color: rgb(16, 7, 7);
}
</style>
