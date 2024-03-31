<template>
    <div class="d-flex">
        <Sidebar />
        <div id="dashboard-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            
            <div class="container">
                <div class="action-btn">
                    <button type="button" class="btn btn-primary" @click="add">Thêm tài khoản</button>
                </div>
                <!-- begin tables -->
                
                <div class="row" id="dashboard-table">
                    <h3 class="table-name">Danh sách độc giả</h3>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Tên độc giả</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="edit">
                                    <th scope="row">1</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                </tr>
                                <tr @click="edit">
                                    <th scope="row">2</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h3 class="table-name">Danh sách nhân viên</h3>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Tên nhân viên</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="edit">
                                    <th scope="row">1</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                </tr>
                                <tr @click="edit">
                                    <th scope="row">2</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
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

function add(){
    alert("add an account")
}

function edit(){
    alert("edit information")
}

function del(){
    alert("delete account")
}
</script>
    