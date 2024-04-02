<template class="Test">
    <div class="fixed">
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid" id="nav-before-login">
                <span class="navbar-brand" href="#" @click="$router.push('/')">
                    <!-- <img src="../img/Logo.png" alt="" width="" height="100" class="d-inline-block align-text-top" > -->
                    <div id="title">Libary Management</div>
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
    nav1: { name: "Thư Viện", to: "/employee", icon: "fas fa-book" },
    nav2: { name: "Quản Lý Thẻ", to: "/employee/card", icon: "fa-solid fa-id-card" },
    nav3: { name: "Tài Khoản", to: "/employee/info", icon: "fa-solid fa-user" },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

template {
    font-family: "Poppins", sans-serif;
}

.NavMove {
    display: flex;
    justify-content: end;
}
.navbar-nav > li {
    padding-right: 30px;
}

.navbar {
    box-shadow: 0 0 30px rgb(82, 39, 82);
    background-color: #0d4dff;
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
    height: 56px;
}

.navbar-nav a {
    /* color: rgb(221, 40, 40); */
    color: white;
    transition: transform 0.5s ease;
}

.navbar-nav a:hover {
    color: rgb(255, 251, 40);
    transform: scale(1.5);
    /* transform: translateY(10vh) */
}

#title {
    color: white;
}
</style>
