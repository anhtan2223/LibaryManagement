<template>
    <Navigation />
    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link" @click="$router.push('./')"
                    >Thông tin cá nhân</a
                >
            </li>
            <li class="nav-item">
                <a class="nav-link active">Quản lý thẻ mượn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="$router.push('./search')"
                    >Tra cứu sách</a
                >
            </li>
        </ul>

        <div class="tab-content">
            <h3 class="table-name">Danh sách thẻ mượn</h3>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Số thẻ</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Ngày bắt đầu</th>
                            <th scope="col">Ngày kết thúc</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="edit">
                            <th scope="row">1</th>
                            <td>B2113316</td>
                            <td>Đã kích hoạt</td>
                            <td>21/01/2024</td>
                            <td>21/04/2024</td>
                            <td>
                                <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-check" style="color: #005716;"></i></button>
                                <button type="button" class="btn btn-outline-warning"><i class="fa-solid fa-rotate" style="color: #FFD43B;"></i></button>
                            </td>
                        </tr>
                        <tr @click="edit">
                            <th scope="row">2</th>
                            <td>B2113342</td>
                            <td>Chưa kích hoạt</td>
                            <td>-</td>
                            <td>-</td>
                            <td>
                                <button type="button" class="btn btn-outline-success"><i class="fa-solid fa-check" style="color: #005716;"></i></button>
                                <button type="button" class="btn btn-outline-warning"><i class="fa-solid fa-rotate" style="color: #FFD43B;"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navigation from "../../components/Navigation.vue";
</script>

<style scoped>
.container {
    position: relative;
    top: 56px;
    width: 70vw;
    margin: 8% 15%;
}

.table-name {
    margin: 2% 0;
    padding: 0 3%;
}

button {
    margin: 0 6%;
}

</style>
