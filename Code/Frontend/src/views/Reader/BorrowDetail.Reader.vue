<template>
    <Nav></Nav>
    <div class="container">
        <h1><b style="color: #0d4dff">Chi tiết mượn trả</b></h1>
        <div class="card mb-3" >
            <div class="row g-0" >
              <div class="col-md-4">
                <img src="https://m.media-amazon.com/images/I/61tsrsmR7aS._SL1254_.jpg"  alt="..." style="width:100%"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h1 class="card-title">Essential Computer Science</h1>
                  <div>
                    <div class="title">Người mượn</div>
                    <div class="content">Nguyễn Phúc Tới</div>
                  </div>
                  <div>
                    <div class="title">Mã thẻ thư viện</div>
                    <div class="content">00000000000</div>
                  </div>
                  <div>
                    <div class="title">Ngày mượn</div>
                    <div class="content">00/00/0000</div>
                  </div>
                  <div>
                    <div class="title">Nhân viên</div>
                    <div class="content">Nguyễn Phúc Lui</div>
                  </div>
                  <div>
                    <div class="title">Ngày hẹn trả</div>
                    <div class="content">00/00/0000</div>
                  </div>    
                  <div>
                    <div class="title">Trạng thái</div>
                    <div class="content state">Đang mượn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 80px;
} 
.title {
    font-weight: bold;
    font-size: 20px;
    color: gray;
}
.content {
    font-weight: bold;
    font-size: 24px;
    color: Black;
    margin-bottom: 8px;
}
.state {
    color: green;
}
</style>

<script setup>
    import Nav from '../../components/Navigation.Reader.vue'
</script>
