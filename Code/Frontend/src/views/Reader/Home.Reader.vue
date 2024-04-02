<template>
    <Navigation />
    <div class="container">
        <div class="all-book">
            <h2>DANH MỤC SÁCH</h2>
        </div>

        <div class="row">
            <div class="search-bar col-md-6">
                <div class="input-group rounded">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>

            <div class="search-bar col-md-3">
                <div class="sort-category">
                    <select
                        class="form-select"
                        aria-label="Default select example">
                        <option selected><b>Tất cả thể loại</b></option>
                        <option v-for="(i,index) in categoryList" :key="i.TenTL" :value="index+1">{{ i.TenTL }}</option>
                    </select>
                </div>
            </div>
            <div class="search-bar col-md-3">
                <div class="sort-btn">
                    <select
                        class="form-select"
                        aria-label="Default select example">
                        <option selected><b>Nổi bật</b></option>
                        <option value="1">Tên: A - Z</option>
                        <option value="2">Tên: Z - A</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="displayed-book">
            <div class="row">
                <div class="single-book col-4" v-for="i in bookList" :key="i.TenSach">
                    <div class="card">
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
import Navigation from "../../components/Navigation.Reader.vue";
import { ref } from "vue";
import Axios from '../../services/api.service'

const bookList = ref([])
async function GetAllBook() {
    bookList.value = await Axios.GetBookHome()
}
GetAllBook()

const categoryList = ref([])
async function GetAllCategory() {
    categoryList.value = await Axios.GetAllCategories()
}
GetAllCategory()
</script>
