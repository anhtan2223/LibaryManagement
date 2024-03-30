<template>
    <div class="d-flex abc">
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
                                    <h5 class="card-title mb-0">Số lượng đọc giả</h5>
                                </div>
                                <div class="row align-items-center mb-2 d-flex">
                                    <div class="col-8">
                                        <h2 class="d-flex align-items-center mb-0"><!-- count the number of user here -->123</h2> 
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
                                            <!-- count the number of books here -->1234
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
                                            <!-- count the number of borrowed books here -->578
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
                                            <!-- count the number of expired books here -->12
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
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <h4>Sách mượn gần đây</h4>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Người mượn</th>
                                    <th scope="col">Tên sách</th>
                                    <th scope="col">Ngày hết hạn</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="table-responsive col-md-6">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <h4>Sách quá hạn trả</h4>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Người mượn</th>
                                    <th scope="col">Tên sách</th>
                                    <th scope="col">Ngày hết hạn</th>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
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
    margin-left: 3%;
}

#statistic {
    margin-top: 4%;
}

.topbar {
    background-color: #0e2238;
    width: 82vw;
    height: 12vh;
}

.topbar h1 {
    color: white;
    text-align: center;
}

</style>

<script setup>
import Sidebar from "../../components/Sidebar.vue";
</script>