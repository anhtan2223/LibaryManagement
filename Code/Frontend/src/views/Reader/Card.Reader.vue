<template>
  <Nav></Nav>
  <div class="container">
      <h1><b style="color: #0d4dff">Lịch sử mượn trả</b></h1>
      <div class="input-group rounded" style="margin-top: 8px">
          <input type="search" class="form-control rounded" placeholder="Tìm kiếm sách" aria-label="Tìm kiếm sách" aria-describedby="search-addon" />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
      </div>
      <table class="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tiêu đề</th>
              <th scope="col">Số lượng</th>
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
              <td>1</td>
              <td>31/3/2024</td>
              <td>1/4/2024</td>
              <td class="borrowing-state">Đang mượn</td>
              <td>Xem chi tiết</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>The Pragmatic Programmer</td>
              <td>1</td>
              <td>31/2/2024</td>
              <td>1/3/2024</td>
              <td class="late-return-state">Quá hạn</td>
              <td>Xem chi tiết</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>The Pragmatic Programmer</td>
              <td>1</td>
              <td>31/2/2024</td>
              <td>1/3/2024</td>
              <td class="returned-state">Đã trả</td>
              <td>Xem chi tiết</td>
            </tr>
          </tbody>
        </table>
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
  color: #0d4dff
}
</style>

<script setup>
  import Nav from '../../components/Navigation.Reader.vue'
</script>
