<template>
    <div class="d-flex">
        <Sidebar />
        <div>
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div class="user bg-white">
                    <h3 class="text-center mt-3 mb-3">Thông Tin Thể Loại</h3>
                    <hr />
                    <div class="body-div">
                        <div class="row align-items-center m-3">
                            <div class="col-2">
                                <label for="code" class="col-form-label"
                                    >Mã thể loại</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="code"
                                    v-model="info.MaTL"
                                    disabled
                                    class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="name" class="col-form-label"
                                    >Tên thể loại</label
                                >
                            </div>
                            <div class="col-4">     
                                <input
                                    type="text"
                                    v-model="info.TenTL"
                                    id="name"
                                    class="form-control"/>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="footer-element m-4">
                        <div class="d-grid gap-3 d-md-flex justify-content-md-around">
                            <button
                                class="btn btn-outline-success"
                                type="button">
                                Xác Nhận
                            </button>
        
                            <!-- <button class="btn btn-outline-primary" type="button" @click="$router.push('/employee/info')">
                            Lịch Sử Mượn Trả
                        </button> -->
        
                            <router-link to="/admin/category">
                                <button
                                    class="btn btn-outline-danger"
                                    type="button"
                                    @click="$router.go(-1)">
                                    Huỷ
                                </button>
                            </router-link>
                        </div>
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
const info = ref()
async function GetCato() {
    info.value = await Axios.GetCategoryByID(props.id)
}
GetCato()
</script>
