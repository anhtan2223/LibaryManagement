<template>
    <div class="d-flex">
        <Sidebar />
        <div id="dashboard-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            
            <div class="container">
                <!-- begin tables -->
                
                <div class="row" id="dashboard-table">
                    <h3 class="table-name">Danh sách độc giả</h3>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            
                            <thead>
                                <tr>
                                    <th scope="col">Tên độc giả</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody v-if="userList.length != 0">
                                <tr v-for="i in userList" @click="$router.push('/admin/account/edit')">
                                    <td v-if="i.RoleID == 3">{{ i.HoTen }}</td>
                                    <td v-if="i.RoleID == 3">{{ i.username }}</td>
                                    <td v-if="i.RoleID == 3">{{ i.Email }}</td>
                                    <td v-if="i.RoleID == 3">{{ i.SDT }}</td>
                                    <td v-if="i.RoleID == 3">{{ i.DiaChi }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 class="table-name">Danh sách nhân viên</h3>
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
                                <tr v-for="i in userList" >
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
    max-width: 100%;
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

.action-btn {
    padding: 2% 4% 0% 4%;
}

button {
    margin: 1%;
}

.table-name {
    margin-left: 4%;
    margin-top: 3%;
    margin-bottom: 0;
    width: 20vw;
}
</style>

<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { ref } from "vue";
import Axios from "../../services/api.service"

const userList = ref([])
async function GetUser() {
    userList.value = await Axios.GetAllAccount()
}
GetUser()
console.log(userList)
</script>
