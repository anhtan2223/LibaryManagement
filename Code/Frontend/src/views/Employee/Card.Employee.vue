<template>
    <Navigation />
    <div class="container">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active">Quản lý thẻ mượn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" @click="$router.push('./search')"
                    >Quản Lý sách</a
                >
            </li>
        </ul>

        <div class="tab-content">
            <h3 class="table-name">Quản Lý Thẻ Mượn Sách</h3>
            <div class="search-bar">
                <div class="input-group rounded">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Mã Thẻ Mượn Sách"
                        aria-label="Search"
                        aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Số thẻ</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Ngày bắt đầu</th>
                            <th scope="col">Ngày kết thúc</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="edit">
                            <th scope="row">1</th>
                            <td>B2113316</td>
                            <td>Đã kích hoạt</td>
                            <td>21/01/2024</td>
                            <td>21/04/2024</td>
                        </tr>
                        <tr @click="edit">
                            <th scope="row">2</th>
                            <td>B2113342</td>
                            <td>Chưa kích hoạt</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import Navigation from "../../components/Navigation.Employee.vue";
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
.search-bar {
    margin: 0 0 3% 0;
}

</style>
