<template>
    <Navigation />
    <div class="container">
        <div class="all-book">
            <h2>DANH MỤC SÁCH</h2>
            {{ type }}
        </div>

        <div class="row">
            <div class="search-bar col-md-6">
                <div class="input-group rounded">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        v-model="input"
                        @input="Search"/>
                </div>
            </div>

            <div class="search-bar col-md-3">
                <div class="sort-category">
                    <select
                        class="form-select"
                        aria-label="Default select example" v-model="type" @change="GetBookByType" >
                        <option selected :value="0"><b>Tất cả thể loại</b></option>
                        <option v-for="i in categoryList" :key="i.TenTL" :value="i.TenTL">{{ i.TenTL }}</option>
                    </select>
                </div>
            </div>
            <div class="search-bar col-md-3" >
                <div class="sort-btn">
                    <select
                        class="form-select"
                        aria-label="Default select example" v-model="sortType" @change="Sorting">
                        <option :value="0">Nổi bật</option>
                        <option :value="1">Tên: A - Z</option>
                        <option :value="2">Tên: Z - A</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="displayed-book">
            <div class="row">
                
                <div class="single-book col-4" v-for="i in bookList" :key="i.TenSach">
                    <div class="card" v-if="type == 0 || i.TenTL == type">
                        <img :src="i.Image"  height="475px" width="310px"/>
                        <div class="card-body">
                            <div class="category">{{ i.TenTL }}</div>
                            <h5 class="card-title">{{ i.TenSach }}</h5>
                            <div class="author">{{ i.TenTG }}</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                            <!-- <a class="btn btn-primary see-detail">Xem chi tiết</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    top: 56px;
    width: 70vw;
}

.all-book {
    margin-top: 5vh;
}

.search-bar {
    margin-top: 3vh;
}

.sort-btn,
.sort-category {
    text-align: end;
}

.displayed-book {
    margin-top: 3vh;
}

.card {
    margin: 5% 0;
}

.card img {
    border-radius: 15px;
    padding: 3%
}

.card .card-body .category {
    font-size: small;
    margin-bottom: 3%;
    color: rgb(16, 154, 154);
    cursor: pointer;
    width: fit-content;
}

.card .card-body .author {
    font-size: small;
    margin-bottom: 3%;
    width: fit-content;
    font-weight: 700;
    color: rgb(156, 154, 150);
}

.card .card-body .status {
    margin-bottom: 3%;
    cursor: pointer;
    width: fit-content;
}


</style>

<script setup>
import Navigation from "../components/Navigation.vue";
import { ref } from "vue";
import Axios from '../services/api.service'

const bookList = ref([])
const type = ref(0)
async function GetAllBook() {
    bookList.value = await Axios.GetBookHome()
}
GetAllBook()

async function GetBookByType()
{
    await Search()
    if(type.value != 0) bookList.value = bookList.value.filter( book => book.TenTL == type.value )
}

const categoryList = ref([])
async function GetAllCategory() {
    categoryList.value = await Axios.GetAllCategories()
}
GetAllCategory()


const input = ref('')
async function Search() {
    bookList.value = await Axios.SearchByName(input.value)
}

const sortedAscendList = ref([])
async function SortAscend() {
    sortedAscendList.value = await Axios.SortAscend()
    // alert(JSON.stringify(bookList.value))
    // bookList.value = bookList[0]
    bookList.value = sortedAscendList._rawValue[0]
    console.log(bookList)
}

const sortedDescendList = ref([])
async function SortDescend() {
    sortedDescendList.value = await Axios.SortDescend()
    // alert(JSON.stringify(bookList.value))
    // bookList.value = bookList[0]
    bookList.value = sortedDescendList._rawValue[0]
    console.log(bookList)
}

const sortType = ref(0)
async function Sorting() {
    if(sortType.value == 1) {
        await SortAscend()
    }
    else if (sortType.value == 2) {
        await SortDescend()
    }
    else {
        await GetAllBook()
    }
}
</script>
