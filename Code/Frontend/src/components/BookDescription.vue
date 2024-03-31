<template>
    <div class="container">
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <img src="../assets/sach8.png" alt="" id="book-image" />
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">
                            Essential Computer Science
                        </h3>
                        <h4 class="author">Paul D. Crutcher</h4>
                        <h5 class="publisher">Xuất bản: 2020 - NXB Kim Đồng</h5>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        <p class="product-description">
                            Dạy cho bạn các khái niệm cơ bản từ phần cứng và
                            kiến trúc máy tính đến học máy. Giúp bạn xem lại
                            Vòng đời Phát triển Phần mềm (SDLC): Lập kế hoạch,
                            Phân tích, Thiết kế, Triển khai, Thử nghiệm, Triển
                            khai và Bảo trì. Bao gồm các công cụ và kỹ thuật cho
                            công nghệ phần mềm tốt nhất
                        </p>
                        <h5 class="status">
                            Trạng thái:
                            <span
                                >Có sẵn!
                                <!--Đã cho mượn--></span
                            >
                        </h5>
                        <p class="vote">
                            <strong>91%</strong> độc giả đề xuất
                            <strong>(87 votes)</strong>
                        </p>
                        <div class="action">
                            <button class="btn btn-primary" type="button">
                                Đăng ký mượn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/*****************globals*************/
body {
    font-family: "open sans";
    overflow-x: hidden;
}

img {
    max-width: 80%;
}

@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.tab-content {
    overflow: hidden;
}
.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.price,
.sizes,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.checked,
.price span {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.container {
    margin-top: 10vh;
}
</style>

<script setup></script>
