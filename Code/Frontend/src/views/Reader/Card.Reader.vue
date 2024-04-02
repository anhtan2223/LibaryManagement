<template>
    <Nav></Nav>
    <div class="container">
        <div class="card-date">
            <div class="user bg-white">
                <h3 class="text-center ">Thông Tin Tài Khoản</h3>
                <hr />
                <div class="body-div">
                    <div class="row align-items-center m-3">
                        <div class="col-2">
                            <label for="name" class="col-form-label"
                                >Ngày bắt đầu</label
                            >
                        </div>
                        <div class="col-4">
                            <input
                                type="text"
                                id="name"
                                class="form-control"
                                disabled
                                v-model="info.HoTen"
                                v-if="!isSetting" />
                            <input
                                type="text"
                                id="name"
                                class="form-control"
                                v-model="info.HoTen"
                                v-else />
                        </div>
                        <div class="col-2">
                            <label for="phone" class="col-form-label"
                                >Ngày Kết thúc</label
                            >
                        </div>
                        <div class="col-4">
                            <input
                                type="text"
                                id="phone"
                                class="form-control"
                                disabled
                                v-model="info.SDT"
                                v-if="!isSetting" />
                            <input
                                type="text"
                                id="phone"
                                class="form-control"
                                v-model="info.SDT"
                                v-else />
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
        {{ info.UID }}
        <div class="history">
            <h1><b style="color: #0d4dff">Lịch sử mượn trả</b></h1>
            <div class="input-group rounded" style="margin-top: 8px">
                <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Tìm kiếm sách"
                    aria-label="Tìm kiếm sách"
                    aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Thời gian mượn</th>
                        <th scope="col">Ngày hẹn trả</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>The Pragmatic Programmer</td>
                        <td>31/3/2024</td>
                        <td>1/4/2024</td>
                        <td class="borrowing-state">Đang mượn</td>
                        <td>Xem chi tiết</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>The Pragmatic Programmer</td>
                        <td>31/2/2024</td>
                        <td>1/3/2024</td>
                        <td class="late-return-state">Quá hạn</td>
                        <td>Xem chi tiết</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>The Pragmatic Programmer</td>
                        <td>31/2/2024</td>
                        <td>1/3/2024</td>
                        <td class="returned-state">Đã trả</td>
                        <td>Xem chi tiết</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 80px;
}
.borrowing-state {
    color: #339900;
}
.late-return-state {
    color: #cc3300;
}
.returned-state {
    color: #0d4dff;
}
.history {
  margin-top: 5%;
}
</style>

<script setup>
import Nav from "../../components/Navigation.Reader.vue";
import { ref } from "vue";
import Axios from "../../services/api.service";
const root = JSON.parse(sessionStorage.info);
const info = ref({ ...root });

</script>
