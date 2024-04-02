<template>
    <div class="d-flex">
        <Sidebar/>
        <div class="author-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <div class="container">
                <div id="author-title"><h2>Quản lý tác giả</h2></div>
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
                    <div class="popup-title"><h3>Thêm tác giả</h3></div>
                    <div class="input-container">
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Mã tác giả</h3>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Mã sách">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Tên tác giả</h3>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Tên sách">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Website</h3>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Mã thể loại">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="textArea" style="font-size: larger;"><b>Ghi chú</b></label>
                                <div class="form-floating">
                                    <textarea id="textArea" cols="100" rows="7" placeholder="Ghi chú về tác giả"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <button @click="() => togglePopup()" class="btn btn-outline-success">Lưu thay đổi</button>
                        <button @click="() => togglePopup()" class="btn btn-outline-danger">Huỷ</button>
                    </div>
                    
                </Popup>

                <div class="table-responsive">
                    <table class="table table-bordered table-hover caption-top">
                        <thead>
                            <tr>
                                <th scope="col">Mã tác giả</th>
                                <th scope="col">Tên tác giả</th>
                                <th scope="col">Website</th>
                                <th scope="col">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody v-if="authorList.length != 0">
                            <tr @click="$router.push('/admin/author/edit')" v-for="i in authorList" >
                                <td>{{ i.MaTG }}</td>
                                <td>{{ i.TenTG }}</td>
                                <td>example.com</td>
                                <td>ghi chú gì đó</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.container {
    padding: 0 3%;
}

.button_in_search_container {
    scale: 100%;
    margin: 5px 5px 5px 3px;
}
.form-control {
    width: 500px;
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
#author-title {
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
    /* margin-top: 5%; */
    margin-left: 40%;
    margin-right: 30%;
}

</style>
<script setup>
import Popup from "../../components/Popup.vue"
import Sidebar from "../../components/Sidebar.vue"
import { ref } from "vue";
import Axios from "../../services/api.service"

const popupTrigger = ref(false)

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value
}

const authorList = ref([])
async function GetAuthor() {
    authorList.value = await Axios.GetAllAuthor()
}
GetAuthor()
</script>
