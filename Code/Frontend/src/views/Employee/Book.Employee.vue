<template>
    <Navigation />
    <div class="container">
        <!-- Nav pills -->
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link " @click="$router.push('./card')">Quản lý thẻ mượn</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active">Quản Lý Sách</a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <h3 class="table-name">Quản Lý Sách</h3>
            <div class="search-bar">
                <div class="input-group rounded">
                    <input
                        type="search"
                        class="form-control rounded"
                        placeholder="Tên Sách"
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
                            <th scope="col">Tiêu đề</th>
                            <th scope="col">Tác giả</th>
                            <th scope="col">Thể Loại</th>
                            <th scope="col">Người Mượn</th>
                            <th scope="col">Ngày hẹn trả</th>
                            <th scope="col">Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr @click="edit">
                            <th scope="row">1</th>
                            <td>Essential Computer Science</td>
                            <td>Paul D. Crutcher</td>
                            <td>Khoa Học</td>
                            <td>Lê Sỹ Anh Tấn</td>
                            <td>21/03/2024</td>
                            <td>Chưa Trả</td>
                        </tr>
                        <tr @click="edit">
                            <th scope="row">2</th>
                            <td>Vũ trụ trong vỏ hạt dẻ</td>
                            <td>Stephen Hawking</td>
                            <td>Khoa học</td>
                            <td>Lê Sỹ Anh Tấn</td>
                            <td>21/01/2024</td>
                            <td>Quá Hạn</td>
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

.search-bar {
    margin: 0 0 3% 0;
}
</style>
