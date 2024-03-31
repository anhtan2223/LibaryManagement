<template>
    <Navigation/>
    <div class="container">
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg" alt="" id="book-image" />
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">
                            Essential Computer Science
                        </h3>
                        <h4 class="author">Paul D. Crutcher</h4>
                        <div class="published">
                            <div><b>Xuất bản: </b>2020</div>
                            
                            <div><b>Nhà xuất bản: </b>Kim Đồng</div>
                        </div>
                        <div class="categories">
                            <div>
                                <b>Thể loại: </b> Giáo dục
                            </div>
                        </div>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                        </div>
                        <h5 class="status">
                            <div>
                                Trạng thái:
                                <span>
                                    Có sẵn!
                                    <!--Đã cho mượn-->
                                </span>
                            </div>
                            <div>
                                Số lượng:
                                <span>
                                    9
                                </span>
                            </div>
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
    max-width: 70%;
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
    margin-top: 13vh;
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

.preview .col-md-6 {
    align-items: center;
}

img#book-image{
    width: 60%;
}
</style>

<script setup>
import Navigation from "./Navigation.vue"
</script>
