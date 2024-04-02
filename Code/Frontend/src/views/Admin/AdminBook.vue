<template>
    <div class="d-flex">
        <Sidebar/>
        <div class="author-content">

            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            <!-- <img :src="'{{ bookList[0].Image }}'" alt=""> -->
            <!-- category content -->
            <div class="container">
                <div id="author-title"><h2>Quản lý sách</h2></div>
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
                    <div class="popup-title"><h3>Thêm tác phẩm</h3></div>
                    <div class="input-container">
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Tên sách</h3>
                            </div>
                            <div class="col-8">
                                <input v-model="newInfo.TenSach" type="text" class="form-control" placeholder="Tên sách">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Ảnh bìa</h3>
                            </div>
                            <div class="col-8">
                                <input v-model="newInfo.Image" type="text" class="form-control" placeholder="Đường dẫn...">
                            </div>
                        </div>
                        <div class="row">
                            <select class="form-select col-8" v-model="newInfo.MaTL" >
                                <option :value="0">Chọn Loại Thể Loại</option>
                                <option 
                                        v-for='i in categoryList' 
                                        :key="i.MaTL" 
                                        :value='i.MaTL'
                                        > {{ i.TenTL }} 
                                </option>
                            </select>
                        </div>
                        <div class="row">
                            <select class="form-select col-8" v-model='newInfo.MaTG' >
                                <option :value="0" >Chọn Loại Tác Giả</option>
                                <option 
                                        v-for='i in authorList' 
                                        :key="i.MaTG" 
                                        :value='i.MaTG'
                                        > 
                                        {{ i.TenTG }} 
                                </option>
                            </select>

                        </div>
                        {{ pub }}
                        <div class="row">
                            <select class="form-select col-8"  v-model="newInfo.MaNXB">
                                <option :value="0">Chọn Loại Nhà Xuất Bản</option>
                                <option 
                                        v-for='i in publisherList' 
                                        :key="i.MaNXB" 
                                        :value='i.MaNXB'
                                        > 
                                        {{ i.TenNXB }} 
                                </option>
                            </select>
                            
                        </div>
                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Năm xuất bản</h3>
                            </div>
                            <div class="col-8">
                                <input v-model="newInfo.NamXB" type="text" class="form-control" placeholder="Năm xuất bản">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4 text-start">
                                <h3>Số Lượng</h3>
                            </div>
                            <div class="col-8">
                                <input v-model="newInfo.number" type="number" class="form-control" placeholder="Năm xuất bản">
                            </div>
                        </div>
                    </div>
                    <div class="button-container">
                        <button @click="() => createNewInfo()" class="btn btn-outline-primary">Thêm Sách</button>
                        <button @click="() => togglePopup()" class="btn btn-outline-danger">Huỷ</button>
                    </div>
                    {{ newInfo }}
                    
                </Popup>

                <div class="table-responsive">
                    <table class="table table-bordered table-hover caption-top">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Ảnh bìa</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Tác giả</th>
                                <th scope="col">Thể loại</th>
                                <th scope="col">Nhà xuất bản</th>
                                <th scope="col">Năm Xuất Bản</th>
                            </tr>
                        </thead>
                        <tbody v-for="(i,index) in bookList" :key="i.TenSach">

                            <!-- @click="$router.push(`/admin/book/edit`)" -->
                            <tr > 
                                <th scope="row">{{index+1}}</th>
                                <td><img :src="i.Image" alt="" id="book-image" style="width: 80px;"/></td>
                                <td>{{ i.TenSach }}</td>
                                <td>{{ i.TenTacGia  }}</td>
                                <td>{{ i.TenNhaXuatBan }}</td>
                                <td>{{ i.TenTheLoai }}</td>
                                <td>{{ i.NamXB }} </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- end category content -->
    </div>
</template>

<script setup>
import Popup from "../../components/Popup.vue"
import Sidebar from "../../components/Sidebar.vue"
import { ref } from "vue";
import Axios from '../../services/api.service'

const bookList = ref([])

async function GetAllBook() {
    bookList.value = await Axios.GetAllBook()
}
GetAllBook()
var pattern = {
        "TenSach": null,
        "MaTG": 0 ,
        "MaTL": 0 ,
        "MaNXB": 0 ,
        "NamXB": null ,
        "Image": null ,
        "number" : 1 
    }

const newInfo = ref({...pattern})
const authorList = ref([])
const publisherList = ref([])
const categoryList = ref([])

const popupTrigger = ref(false)


async function createNewInfo()
{
    if(!newInfo.value.TenSach) return alert("Không Thể Để Trống Tên Sách")
    const result = await Axios.AddBook(newInfo.value)
    alert(result.message)
    newInfo.value = pattern
    togglePopup()
    GetAllBook()
}

const togglePopup = () => {
    popupTrigger.value = !popupTrigger.value
}

async function GetList() {
    categoryList.value = await Axios.GetAllCategories()
    publisherList.value = await Axios.GetAllPublisher()
    authorList.value = await Axios.GetAllAuthor()
}
GetList()

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