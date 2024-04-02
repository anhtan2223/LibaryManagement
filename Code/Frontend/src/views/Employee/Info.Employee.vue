<template>
    <Nav></Nav>
    <div class="user bg-white">
        <h3 class="text-center mt-3 mb-3">Thông Tin Tài Khoản</h3>
        <hr>
        <div class="body-div">

            <div class="row align-items-center m-3">
                    <div class="col-2">
                        <label for="name" class="col-form-label">Họ và Tên</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="name" class="form-control " disabled v-model = 'info.HoTen' v-if='!isSetting'>
                        <input type="text" id="name" class="form-control "  v-model='info.HoTen' v-else>
                    </div>
                    <div class="col-2">
                        <label for="phone" class="col-form-label">Số Điện Thoại</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="phone" class="form-control " disabled v-model='info.SDT' v-if='!isSetting'>
                        <input type="text" id="phone" class="form-control "  v-model='info.SDT' v-else>
                    </div>
            </div>

            <div class="row align-items-center m-3">
                    <div class="col-2">
                        <label for="username" class="col-form-label">Tài Khoản</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="username" class="form-control " disabled :value='info.username'>
                    </div>
                    <div class="col-2">
                        <label for="email" class="col-form-label">Email</label>
                    </div>
                    <div class="col-4">
                        <input type="text" id="email" class="form-control " disabled v-model='info.Email' v-if='!isSetting'>
                        <input type="text" id="email" class="form-control "  v-model='info.Email' v-else>
                    </div>
            </div>

            <div class="row align-items-center m-3" v-if="info.DiaChi">
                    <div class="col-2">
                        <label for="email" class="col-form-label">Địa Chỉ</label>
                    </div>

                    <div class="col-10" >
                        <input type="text" id="email" class="form-control " disabled :value='info.DiaChi' v-if="!isSetting">
                        <input type="text" id="email" class="form-control " v-model='info.DiaChi' v-else>
                    </div>

            </div>
        </div>
        <hr>
        <div class="footer-element m-4">
            <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                <button class="btn btn-outline-primary" type="button" @click="isSetting = !isSetting" v-if="!isSetting">Sửa Thông Tin </button>
                <button class="btn btn-outline-success"
                    type="button" 
                    @click="UpdateInfo"
                    v-else > Xác Nhận  
                </button>
                <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/password')">
                    Đổi Mật Khẩu
                </button>

                <!-- <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/info')">
                    Lịch Sử Mượn Trả
                </button> -->
                
                <router-link to="/login">
                    <button class="btn btn-outline-danger " type="button" @click="DangXuat">
                        Đăng Xuất
                    </button>
                </router-link>
            </div>
                <!-- {{ root }} -->
            </div>
    </div> 
</template>

<script setup >
import Nav from '../../components/Navigation.Employee.vue'
import {ref} from 'vue'
import AxiosAPI from '../../services/api.service'
const root = JSON.parse(sessionStorage.info)
const info = ref({...root})
// delete info.value._id
const isLogin = sessionStorage.isLogin
const isSetting = ref(false)

async function UpdateInfo() 
{
    isSetting.value = !isSetting.value 
    await AxiosAPI.UpdateAccount(root.UID , info.value)
    alert("Cập Nhật Thông Tin Tài Khoản Thành Công")
    sessionStorage.info = JSON.stringify({"UID" : root.UID , ...info.value})
}
function DangXuat()
{
    sessionStorage.clear()
}
</script>

<style>
.user{
    border-radius: 20px;
    width: 75vw;
    /* height: 50vh; */
    margin-top: 20vh;
    margin-left: 50%;
    transform: translateX(-50%);
}
</style>