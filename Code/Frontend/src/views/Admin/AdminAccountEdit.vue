<template>
    <div class="d-flex">
        <Sidebar />
        <div>
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div class="user bg-white">
                    <h3 class="text-center mt-3 mb-3">Thông Tin Tài Khoản</h3>
                    <hr>
                    <div class="body-div">

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="name" class="col-form-label">Họ và Tên</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="name" class="form-control ">
                                </div>
                                <div class="col-2">
                                    <label for="phone" class="col-form-label">Số Điện Thoại</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="phone" class="form-control ">
                                </div>
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="username" class="col-form-label">Tài Khoản</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="username" class="form-control " disabled>
                                </div>
                                <div class="col-2">
                                    <label for="password" class="col-form-label">Mật khẩu</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="password" class="form-control " disabled>
                                </div>
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="email" class="col-form-label">Email</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="email" class="form-control " >
                                </div>
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="email" class="col-form-label">Địa Chỉ</label>
                                </div>

                                <div class="col-10" >
                                    <input type="text" id="email" class="form-control ">
                                </div>

                        </div>
                    </div>
                    <hr>
                    <div class="footer-element m-4">
                        <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                            <button class="btn btn-outline-primary" type="button" >Sửa Thông Tin </button>
                            <button class="btn btn-outline-success"
                                type="button" 
                                @click="UpdateInfo"> Xác Nhận  
                            </button>

                            <!-- <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/info')">
                                Lịch Sử Mượn Trả
                            </button> -->
                            
                            <router-link to="/admin/account">
                                <button class="btn btn-outline-danger " type="button" >
                                    Huỷ
                                </button>
                            </router-link>
                        </div>
                            <!-- {{ root }} -->
                        </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<style scoped>
.topbar {
    background-color: #0e2238;
    width: 80vw;
    height: 12vh;
}
</style>
<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { ref } from "vue";

function del() {
    alert("Delete an author!");
}

const popupTrigger = ref(false);

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value;
};
</script>
