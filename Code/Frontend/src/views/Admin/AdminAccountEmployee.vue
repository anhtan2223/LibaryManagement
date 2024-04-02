<template>
    <div class="d-flex">
        <Sidebar />
        <div id="dashboard-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            
            <div class="container">
                <!-- begin tables -->
                <div id="dashboard-table">
                    <div class="row">
                        <div class="col-5"><h3 class="table-name">Danh sách nhân viên</h3></div>
                        <div class="add-btn col-7">
                            <button
                                @click="() => togglePopup()"
                                type="button"
                                class=" btn btn-primary">
                                <i class="fas fa-plus" style="color: #ffffff"></i>
                            </button>
                        </div>
                    </div>

                    <Popup v-if="popupTrigger" :Toggle="()=> togglePopup()">
                        <div class="popup-title"><h3>Thêm tài khoản nhân viên</h3></div>
                        <div class="input-container">
                            <div class="row">
                                <div class="col-4 text-start">
                                    <h3>Tên tài khoản</h3>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Tên tài khoản">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-start">
                                    <h3>Mật khẩu</h3>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Mật khẩu">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-start">
                                    <h3>Họ và tên</h3>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Họ và tên">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-start">
                                    <h3>Số điện thoại</h3>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Mật khẩu">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 text-start">
                                    <h3>Địa chỉ</h3>
                                </div>
                                <div class="col-8">
                                    <input type="text" class="form-control" placeholder="Mật khẩu">
                                </div>
                            </div>
                        </div>
                        <div class="button-container">
                            <button @click="() => togglePopup()" class="btn btn-outline-success">Lưu thay đổi</button>
                            <button @click="() => togglePopup()" class="btn btn-outline-danger">Huỷ</button>
                        </div>
                    </Popup>

                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Tên nhân viên</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody v-if="userList.length != 0">
                                <tr v-for="i in userList" :key="i.UID" @click="$router.push(`/admin/account/${i.UID}`)" >
                                    <td v-if="i.RoleID == 2">{{ i.HoTen }}</td>
                                    <td v-if="i.RoleID == 2">{{ i.username }}</td>
                                    <td v-if="i.RoleID == 2">{{ i.Email }}</td>
                                    <td v-if="i.RoleID == 2">{{ i.SDT }}</td>
                                    <td v-if="i.RoleID == 2">{{ i.DiaChi }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- end tables -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin:0;
    padding: 0;
}

.row {
    padding: 0 3%;
    margin: 0;
}

.add-btn {
    width: 50%;
    margin-bottom: 0;
}

#dashboard-content h1{
    margin-top: 0;
    height: 20px;
}

#dashboard-content .container {
    margin-left: 0;
    margin-top:1vh;
}

.topbar {
    background-color: #0e2238;
    width: 80vw;
    height: 12vh;
}

.topbar h1 {
    color: white;
    text-align: center;
}

.table-responsive {
    padding: 3% 5%;
}

button {
    margin: 2%;
}

.table-name {
    margin-left: 5%;
    margin-top: 3%;
    margin-bottom: 0;
    width: 70%;
}.popup-title {
    margin: 2% 0;
    text-align: center;
}

.input-container {
    padding: 2% 10%;
    /* margin-left: 5%; */
}

.button-container {
    /* margin-top: 5%; */
    margin-left: 40%;
    margin-right: 30%;
}
</style>

<script setup>
import Popup from "../../components/Popup.vue"
import Sidebar from "../../components/Sidebar.vue"
import { ref } from "vue";
import Axios from "../../services/api.service";

const popupTrigger = ref(false)

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value
}

const userList = ref([])
async function GetUser() {
    userList.value = await Axios.GetAllAccount()
}
GetUser()

</script>
