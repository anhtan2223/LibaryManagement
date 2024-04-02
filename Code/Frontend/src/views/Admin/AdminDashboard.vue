<template>
    <div class="d-flex">
        <Sidebar />
        <div id="dashboard-content">
            <div class="topbar">
                <!-- just here for the top bar, nothing else -->
            </div>
            
            <div class="container">
                <!-- begin statistic -->
                <div class="row" id="statistic">
                    <div class="col-xl-6 col-lg-6">
                        <div class="card l-bg-cherry">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Số lượng độc giả</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0">{{ statistic[0][0].ReaderCount }}</h2> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="card l-bg-blue-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-book"></i>
                                </div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">Số lượng sách</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2
                                            class="d-flex align-items-center mb-0">
                                            {{ statistic[0][0].BookCount }}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="card l-bg-green-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-ticket-alt"></i>
                                </div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">
                                        Số sách đã được mượn
                                    </h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2
                                            class="d-flex align-items-center mb-0">
                                            {{ statistic[0][0].BorrowedCount }}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="card l-bg-orange-dark">
                            <div class="card-statistic-3 p-4">
                                <div class="card-icon card-icon-large">
                                    <i class="fas fa-chart-pie"></i>
                                </div>
                                <div class="mb-4">
                                    <h5 class="card-title mb-0">
                                        Số sách quá hạn
                                    </h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2
                                            class="d-flex align-items-center mb-0">
                                            {{ statistic[0][0].ExpiredCount }}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end statistic -->

                <!-- begin tables -->
                <div class="row" id="dashboard-table">
                    <div class="table-responsive col-md-6"> 
                        <h4>Sách đang được mượn</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Người mượn</th>
                                    <th scope="col">Tên sách</th>
                                    <th scope="col">Ngày hết hạn</th>
                                </tr>
                            </thead>
                            <tbody v-if="normalizedBorrowed.length != 0">
                                <tr v-for="(i, index) in normalizedBorrowed" :key="i.TenSach">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ i.HoTen }}</td>
                                    <td>{{ i.TenSach }}</td>
                                    <td>{{ i.NgayHetHan }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive col-md-6">
                        <h4>Sách quá hạn</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Người mượn</th>
                                    <th scope="col">Tên sách</th>
                                    <th scope="col">Số ngày trễ</th>
                                </tr>
                            </thead>
                            <tbody v-if="normalizedOverExpired.length != 0">
                                <tr v-for="(i, index) in normalizedOverExpired" :key="i.TenSach">
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ i.HoTen }}</td>
                                    <td>{{ i.TenSach }}</td>
                                    <td>{{ i.SoNgayQuaHan }} ngày</td>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
/* Card style */
.abc {
    transform: translateY(-10vh);
}
.card {
    background-color: #fff;
    border-radius: 10px;
    border: none;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1),
        0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1),
        0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12),
        0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}
.l-bg-cherry {
    background: linear-gradient(to right, #493240, #f09) !important;
    color: #fff;
}

.l-bg-blue-dark {
    background: linear-gradient(to right, #373b44, #4286f4) !important;
    color: #fff;
}

.l-bg-green-dark {
    background: linear-gradient(to right, #0a504a, #38ef7d) !important;
    color: #fff;
}

.l-bg-orange-dark {
    background: linear-gradient(to right, #a86008, #ffba56) !important;
    color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
    font-size: 110px;
}

.card .card-statistic-3 .card-icon {
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    color: #000;
    position: absolute;
    right: 5%;
    top: 20px;
    opacity: 0.1;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}

.l-bg-green {
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
    color: #fff;
}

.l-bg-orange {
    background: linear-gradient(to right, #f9900e, #ffba56) !important;
    color: #fff;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}
/* End card style */

#dashboard-content h1{
    margin-top: 0;
    height: 20px;
}

#dashboard-content .container {
    margin-left: 0;
}

#statistic {
    margin-top: 2%;
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

</style>

<script setup>
import Sidebar from "../../components/Sidebar.vue";
import { ref } from "vue";
import Axios from "../../services/api.service"

const statistic = ref(0)
async function GetCount() {
    statistic.value = await Axios.GetStatistic()
}
GetCount()

const borrowed = ref([])
const normalizedBorrowed = ref([])
async function GetBorrowed() {
    borrowed.value = await Axios.GetRecentBorrowed()
    // alert(borrowed._rawValue[0].length)
    for(var i = 0; i < borrowed._rawValue[0].length; i++) {
        // normalizedBorrowed.push(borrowed._rawValue[0][i])
        var name = borrowed._rawValue[0][i].HoTen
        var book = borrowed._rawValue[0][i].TenSach
        var expire = borrowed._rawValue[0][i].NgayHetHan
        
        var date = new Date(expire)
        var formattedDate = date.toLocaleDateString()
        // alert(name + " " + book + " " + formattedDate)
        normalizedBorrowed.value.push({"HoTen": name, "TenSach": book, "NgayHetHan": formattedDate})
    }
    // alert(JSON.stringify(normalizedBorrowed.value))
}
GetBorrowed()

const overExpired = ref([])
const normalizedOverExpired = ref([])
async function GetExpired() {
    overExpired.value = await Axios.GetOverExpired()
    // alert(borrowed._rawValue[0].length)
    for(var i = 0; i < overExpired._rawValue[0].length; i++) {
        // normalizedBorrowed.push(borrowed._rawValue[0][i])
        var name = overExpired._rawValue[0][i].HoTen
        var book = overExpired._rawValue[0][i].TenSach
        var expire = overExpired._rawValue[0][i].SoNgayQuaHan
        
        // alert(name + " " + book + " " + expire)
        normalizedOverExpired.value.push({"HoTen": name, "TenSach": book, "SoNgayQuaHan": expire})
    }
    // alert(JSON.stringify(normalizedOverExpired.value))
}
GetExpired()

</script>   
