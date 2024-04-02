<template>
    <div class="d-flex">
        <Sidebar/>
        <div class="publishing-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div id="publishing-title"><h2>Quản lý NXB</h2></div>
                <div class="search-container">
                    <div class="input-group search-container flex-end">
                        <div class="form-outline" data-mdb-input-init>
                            <input type="search" id="form1" class="form-control" />
                        </div>
                        <button
                            type="button"
                            class="button_in_search_container btn btn-primary"
                            data-mdb-ripple-init>
                            <i class="fas fa-search"></i>
                        </button>
                        <button
                            @click="() => togglePopup()"
                            type="button"
                            class="button_in_search_container btn btn-primary">
                            <i class="fas fa-plus" style="color: #ffffff"></i>
                        </button>
                    </div>
                </div>

                <Popup v-if="popupTrigger" :Toggle="()=> togglePopup()">
                    <div class="popup-title"><h3>Thêm Nhà xuất bản</h3></div>
                    <div class="input-container">
                        <div class="row">
                            <div class="col-4 text-start">
                                <h4>Mã NXB</h4>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Mã nhà xuất bản">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h4>Tên NXB</h4>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Tên nhà xuất bản">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h4>Địa chỉ</h4>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Địa chỉ">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h4>Email</h4>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h4>Tên người đại diện</h4>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Người đại diện">
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <button @click="() => togglePopup()" class="btn btn-outline-success">Lưu thay đổi</button>
                        <button @click="() => togglePopup()" class="btn btn-outline-danger">Huỷ</button>
                    </div>
                    
                </Popup>

                <div class="table-responive">
                    <table class="table table-bordered table-hover caption-top">
                        <thead>
                            <tr>
                                <th scope="col">Mã nhà xuất bản</th>
                                <th scope="col">Tên nhà xuất bản</th>
                                <th scope="col">Địa chỉ</th>
                                <th scope="col">Người đại diện</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody v-if="publisherList.length != 0">
                            <tr @click="$router.push(`/admin/publisher/${i.MaNXB}`)" v-for="i in publisherList" :key="i.MaNXB">
                                <td>{{ i.MaNXB }}</td>
                                <td>{{ i.TenNXB }}</td>
                                <td>{{ i.DiaChi }}</td>
                                <td v-if="i.NguoiDaiDien != null">{{ i.NguoiDaiDien }}</td>
                                <td v-else>---</td>
                                <td>{{ i.Email }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Popup from "../../components/Popup.vue"
import Sidebar from "../../components/Sidebar.vue"
import { ref } from "vue";
import Axios from "../../services/api.service"

function del() {
    alert("Delete an author!")
}

const popupTrigger = ref(false)

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value
}

const publisherList = ref([])
async function GetPublisher() {
    publisherList.value = await Axios.GetAllPublisher()
}
GetPublisher()
</script>
<style scoped>
.container {
    padding: 0 3%;
}
.button_in_search_container {
    scale: 100%;
    margin: 5px 5px 5px 3px;
}
.search-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: center;
    margin-bottom: 1%;
}

.add_button {
    float: inline-end;
    width: 150px;
}
.action_button {
    width: 150px;
}
table {
    border: 1px solid #111111;
    border-radius: 5px;
}
button {
    align-items: center;
    justify-self: center;
    scale: 80%;
    margin-right: 1px;
}
.topbar {
    background-color: #0e2238;
    width: 80vw;
    height: 12vh;
}
#publishing-title {
    margin: 2% 0;
}

.popup-title {
    margin: 2% 0;
    text-align: center;
}

.input-container {
    padding: 2% 10%;
    /* margin-left: 5%; */
}

.row {
    margin-bottom: 20px;
}

.button-container {
    margin-top: 5%;
    margin-left: 40%;
    margin-right: 30%;
}
</style>