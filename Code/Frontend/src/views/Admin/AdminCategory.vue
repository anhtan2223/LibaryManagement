<template>
    <div class="d-flex">
        <Sidebar/>
        <div class="author-content">

            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>

            <!-- category content -->
            <div class="container">
                <div id="author-title"><h2>Quản lý thể loại</h2></div>
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
                    <div class="popup-title"><h3>Thêm thể loại sách</h3></div>
                    <div class="input-container">
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Mã thể loại</h3>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Mã thể loại">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Tên thể loại</h3>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" placeholder="Tên thể loại">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <label for="textArea" style="font-size: larger;"><b>Ghi chú</b></label>
                                <div class="form-floating">
                                    <textarea id="textArea" cols="100" rows="7" placeholder="Ghi chú"></textarea>
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
                    <table class="table table-bordered caption-top">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Mã thể loại</th>
                                <th scope="col">Tên thể loại</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td class="action_button">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fas fa-wrench" style="color: #ffffff"></i>
                                    </button>
                                    <button class="btn btn-primary" type="submit" @click="del">
                                        <i class="fas fa-trash" style="color: #ffffff"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td class="action_button">
                                    <button class="btn btn-primary" type="submit" @click="del">
                                        <i class="fas fa-wrench" style="color: #ffffff"></i>
                                    </button>
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fas fa-trash" style="color: #ffffff"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td class="action_button">
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fas fa-wrench" style="color: #ffffff"></i>
                                    </button>
                                    <button class="btn btn-primary" type="submit">
                                        <i class="fas fa-trash" style="color: #ffffff" @click="del"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- end category content -->
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

function del() {
    alert("Delete an author!")
}

const popupTrigger = ref(false)

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value
}
</script>