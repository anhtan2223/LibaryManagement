<template>
    <body class="wrapper d-flex">
        <aside id="sidebar">
            <div class="d-flex" id="sidebar-signature">
                <div class="sidebar-logo">
                    <img src="../assets/logo.png" alt="logo" id="logo">
                    <span id="sidebar-title">
                        <a href="#"> Library Management</a>
                    </span>
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard')" class="sidebar-link">
                        <i class="lni lni-home"></i>
                        <span> Trang Chủ</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard/user')" class="sidebar-link">
                        <i class="lni lni-user"></i>
                        <span> Quản lý người dùng</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard/book')" class="sidebar-link">
                        <i class="lni lni-book"></i>
                        <span> Quản lý sách</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard/author')" class="sidebar-link">
                        <i class="lni lni-write"></i>
                        <span> Quản lý tác giả</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard/category')" class="sidebar-link">
                        <i class="lni lni-write"></i>
                        <span> Quản lý thể loại</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <a @click="$router.push('/dashboard/publisher')"  class="sidebar-link">
                        <i class="lni lni-write"></i>
                        <span> Quản lý NXB</span>
                    </a>
                </li>
            </ul>
            <div class="sidebar-footer">
                <a href="" class="sidebar-link">
                    <i class="lni lni-exit"></i>
                    <span>Đăng xuất</span>
                </a>
            </div>
        </aside>
    </body>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: "Poppins", sans-serif;
}

.wrapper {
    display: flex;
}

.main {
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    transition: all 0.35s ease-in-out;
    background-color: white;
}

#sidebar {
    width: 320px;
    min-width: 320px;
    background-color: #0e2238;
    display: flex;
    flex-direction: column;
}

#sidebar-signature {
    margin: 5% auto;
}

#sidebar-title a {
    color: white;
    font-size: 1.15rem;
    font-weight: 600;
}

#logo {
    height: 80px;
    width: 90px;
    background-color: white;
}

.sidebar-nav {
    padding: 2rem 0;
    flex: 1 1 auto
}

a.sidebar-link {
    padding: .625rem 1.625rem;
    color: white;
    display: block;
    font-size: 0.9rem;
    white-space: nowrap;
    border-left: 3px solid transparent;
}

a.sidebar-link span {
    font-size: 1.3rem;
}

a.sidebar-link:hover {
    background-color: rgba(255, 255, 255, .075);
    border-left: 3px solid #3b7ddd;
}

.sidebar-link i {
    font-size: 1.1rem;
    margin-right: .75rem;
}

.sidebar-item {
    position: relative;
}

</style>

<script setup>
</script>
