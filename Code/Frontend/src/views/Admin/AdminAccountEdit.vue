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
                                    <input type="text" id="name" class="form-control " v-model="info.HoTen">
                                </div>

                                <div class="col-2">
                                    <label for="phone" class="col-form-label">Trạng Thái</label>
                                </div>
                                <div class="col-4">
                                        {{ info.isActive ? "Hoạt Đông" : "Đang Khoá" }}
                                </div>
                                
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="username" class="col-form-label">Tài Khoản</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="username" class="form-control " disabled v-model="info.username">
                                </div>
                                <div class="col-2">
                                    <label for="password" class="col-form-label">Mật khẩu</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="password" class="form-control" v-model="info.password" >
                                </div>
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="email" class="col-form-label">Email</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="email" class="form-control" v-model="info.Email" >
                                </div>
                                <div class="col-2">
                                    <label for="phone" class="col-form-label">Số Điện Thoại</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" id="phone" class="form-control " v-model="info.SDT">
                                </div>
                        </div>

                        <div class="row align-items-center m-3">
                                <div class="col-2">
                                    <label for="email" class="col-form-label">Địa Chỉ</label>
                                </div>

                                <div class="col-10" >
                                    <input type="text" id="email" class="form-control " v-model="info.DiaChi">
                                </div>

                        </div>
                    </div>
                    <hr>
                    <div class="footer-element m-4">
                        <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                            <button class="btn btn-outline-primary" 
                            @click="UpdateInfo"
                            type="button" >
                                Sửa Thông Tin 
                            </button>
                            <button class="btn btn-outline-danger"
                                type="button" 
                                v-if="info.isActive == 1"
                                @click="LockAccount"> Khoá Tài Khoản  
                            </button>

                            <button class="btn btn-outline-success"
                                type="button" 
                                v-else
                                @click="UnockAccount"> Mở Khoá Tài Khoản  
                            </button>

                            <!-- <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/info')">
                                Lịch Sử Mượn Trả
                            </button> -->
                            
                            <!-- <router-link to="/admin/account"> -->
                                <button class="btn btn-outline-danger " type="button" @click="$router.go(-1)">
                                    Quay Về</button>
                            <!-- </router-link> -->
                        </div>
                            <!-- {{ info }} -->
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

const mappingTable = [
    "Hello" , "Độc Giả" , "Nhân Viên" , "Quản Lý"
]

const props = defineProps(["id"])
import Axios from "../../services/api.service"
const info = ref()
const newPassword = ref("")
async function GetInfo() {
    info.value = await Axios.GetAccountByID(props.id)
}
GetInfo()
async function UpdateInfo(){
    if(!info.value.HoTen) return alert("Không Thể Để Trống Tên Người Dùng")
    if(!info.value.password) delete info.value.password 
    await Axios.UpdateAccount(props.id , info.value)
    alert("Cập Nhật Thành Công")
    newPassword.value = ""
    useRouter().go(-1)
}
async function LockAccount() {
    await Axios.LockAccount(props.id)
    info.value.isActive = 0
    alert(`Đã Khoá Tài Khoản ${info.value.username} Thành Công `)
}
async function UnockAccount() {
    await Axios.UnlockAccount(props.id)
    info.value.isActive = 1
    alert(`Đã Mở Khoá Tài Khoản ${info.value.username} Thành Công `)
}


</script>
