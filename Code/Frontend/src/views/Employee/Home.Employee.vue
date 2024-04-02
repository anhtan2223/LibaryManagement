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
                        <option value="1">Giáo dục</option>
                        <option value="2">Khoa học</option>
                        <option value="2">Viễn tưởng</option>
                        <option value="2">Trinh thám</option>
                        <option value="2">Sách thiếu nhi</option>
                        <option value="2">Lịch sử</option>
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
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                        </div>
                    </div>
                </div>
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                        </div>
                    </div>
                </div>
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                        </div>
                    </div>
                </div>
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                        </div>
                    </div>
                </div>
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
                        </div>
                    </div>
                </div>
                <div class="single-book col-4">
                    <div class="card">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." />
                        <div class="card-body">
                            <div class="category">Khoa học</div>
                            <h5 class="card-title">Essential Computer Science</h5>
                            <div class="author">Paul D. Crutcher</div>
                            <div class="status">Trạng thái: {{ "Có sẵn" }}</div>
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
    width: 100%;
    height: 50%;
    object-fit: cover;
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
import Navigation from "../../components/Navigation.Employee.vue";
</script>
