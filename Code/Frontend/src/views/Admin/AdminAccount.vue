<template>
    <div class="d-flex">
        <Sidebar />
        <div id="dashboard-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            
            <div class="container">
                <div class="action-btn">
                    <button type="button" class="btn btn-primary">Thêm tài khoản</button>
                </div>
                <!-- begin tables -->
                <div class="row" id="dashboard-table">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <h4>Danh sách độc giả</h4>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên độc giả</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                    <td><button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                    <td><button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <h4>Danh sách Nhân viên</h4>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Tên độc giả</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Địa chỉ</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                    <td><button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Phong Phạm</td>
                                    <td>phphong</td>
                                    <td>phphong@gmail.com</td>
                                    <td>0192301239</td>
                                    <td>Can Tho</td>
                                    <td><button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-pen-to-square"></i></button></td>
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
</style>

<script setup>
import Sidebar from "../../components/Sidebar.vue";

function alerting(){
    alert("ajbdahsdask")
}
</script>
