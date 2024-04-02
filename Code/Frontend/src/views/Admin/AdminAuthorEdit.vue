<template>
    <div class="d-flex">
        <Sidebar />
        <div>
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div class="user bg-white">
                    <h3 class="text-center mt-3 mb-3">Thông tin tác giả</h3>
                    <hr />
                    <div class="body-div">
                        <div class="row align-items-center m-3">
                            <div class="col-2">
                                <label for="code" class="col-form-label"
                                    >Mã tác giả</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="code"
                                    v-model="info.MaTG"
                                    disabled
                                    class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="name" class="col-form-label"
                                    >Tên tác giả</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="name"
                                    v-model="info.TenTG"
                                    @keydown.enter="UpdateInfo"
                                    class="form-control"/>
                            </div>
                        </div>
        
                        <div class="row align-items-center m-3">
                            <div class="col-2">
                                <label for="email" class="col-form-label">Website</label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="email"
                                    v-model="info.Website"
                                    @keydown.enter="UpdateInfo"
                                    class="form-control"/>
                            </div>
                        </div>
        
                        <div class="row align-items-center m-3" >
                            <div class="col-2">
                                <label for="note" class="col-form-label"
                                    >Ghi chú</label
                                >
                            </div>
        
                            <div class="col-10">
                                <input
                                    type="text"
                                    id="note"
                                    v-model="info.GhiChu"
                                    @keydown.enter="UpdateInfo"
                                    class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="footer-element m-4">
                        <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                            <button
                                class="btn btn-outline-success"
                                @click="UpdateInfo()"
                                type="button">
                                Xác Nhận
                            </button>

                            <button
                                class="btn btn-outline-danger"
                                @click="DeleteInfo"
                                type="button">
                                Xoá 
                            </button>
        
                            <!-- <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/info')">
                            Lịch Sử Mượn Trả
                        </button> -->
        
                            <router-link to="/admin/author">
                                <button
                                    class="btn btn-outline-danger"
                                    type="button">
                                    Huỷ
                                </button>
                            </router-link>
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



const props = defineProps(["id"])
import Axios from "../../services/api.service"
import { useRouter } from "vue-router";
const info = ref()
async function GetAuthor() {
    info.value = await Axios.GetAuthorByID(props.id)
}

async function DeleteInfo() {
    const message = await Axios.DeleteAuthorByID(props.id)
    alert(message.message)
    useRouter().go(-1)
}

async function UpdateInfo(){
    if(!info.value.TenTG) alert("Không Thể Để Trống Tên Tác Giả")
    const result = await Axios.UpdateAuthor(props.id , info.value)
    alert("Cập Nhật Thành Công")
    useRouter().go(-1)
}

GetAuthor()
</script>
