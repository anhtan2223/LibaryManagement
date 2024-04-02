<template>
    <div class="d-flex">
        <Sidebar />
        <div>
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div class="user bg-white">
                    <h3 class="text-center mt-3 mb-3">Thông Tin Sách</h3>
                    <hr />
                    <div class="body-div">
                        <div class="row align-items-center m-3">
                            <div class="col-2">
                                <label for="code" class="col-form-label"
                                    >Mã sách</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="code"
                                    class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="name" class="col-form-label"
                                    >Tên sách</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="name"
                                    class="form-control"/>
                            </div>
                        </div>
        
                        <div class="row align-items-center m-3">
                            <div class="col-2">
                                <label for="cover-img" class="col-form-label"
                                    >Ảnh bìa</label
                                >
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="cover-img"
                                    class="form-control"
                                    />
                            </div>
                            <div class="col-2">
                                <label for="author" class="col-form-label">Tác giả</label>
                            </div>
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="author"
                                    class="form-control"/>
                            </div>
                        </div>
        
                        <div class="row align-items-center m-3" >
                            <div class="col-2">
                                <label for="category" class="col-form-label"
                                    >Thể loại</label
                                >
                            </div>
        
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="category"
                                    class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="publisher" class="col-form-label"
                                    >Nhà xuất bản</label
                                >
                            </div>
        
                            <div class="col-4">
                                <input
                                    type="text"
                                    id="publisher"
                                    class="form-control"/>
                            </div>
                        </div>
                        <div class="row align-items-center m-3" >
                            <div class="col-2">
                                <label for="quantity" class="col-form-label"
                                    >Số lượng</label
                                >
                            </div>
        
                            <div class="col-4">
                                <input
                                    type="number"
                                    id="quantity"
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
        
                            <router-link to="/admin/book">
                                <button
                                    class="btn btn-outline-danger"
                                    type="button">
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

// const props = defineProps(["id"])
// import Axios from "../../services/api.service"
// const info = ref()
// async function GetAuthor() {
//     info.value = await Axios.GetBookByID(props.id)
// }
// GetAuthor()

</script>
