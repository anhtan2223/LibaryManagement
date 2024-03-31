<template> 
    <div class="container">
        <div>
                <h2>Publishing</h2>
                <div class="search-container">
                    <div class="input-group search-container flex-end">
                        <div class="form-outline" data-mdb-input-init>
                            <input type="search" id="form1" class="form-control" />
                        </div>
                        <button type="button" class="button_in_search_container btn btn-primary" data-mdb-ripple-init>
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <button type="button" class=" button_in_search_container btn btn-primary"><i class="fas fa-plus" style="color: #ffffff;"></i></button>
                </div>
        </div>

    <table class="table caption-top">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Mã nhà xuất bản</th>
            <th scope="col">Tên nhà xuất bản</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Người đại diện</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td >MB201hx</td>
      <td >Nhà Xuất Bản Kim Đồng</td>
      <td class="col_3">55 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội</td>
      <td class="col_4">info@nxbkimdong.com.vn</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td class="col_3">55 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội</td>
      <td class="col_4">info@nxbkimdong.com.vn</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td class="col_3">55 Trần Hưng Đạo, Quận Hoàn Kiếm, Hà Nội</td>
      <td class="col_4">info@nxbkimdong.com.vn</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<style scoped>
    .col_3{
        padding-right: 50px;
        box-sizing: border-box;   
    }
    .col_4{
        padding-right: 20px;
    }
    .button_in_search_container{
        scale: 100%;
        margin: 5px 5px 5px 3px  ;
        align-self: center;
        align-items: center;
    }
    .form-control{
        width: 500px;
        
    }
    .search-container{
        display: flex;
        justify-content: flex-end;
        align-items: center;

    }
    
    .add_button{
        float: inline-end   ;
        width: 150px;
    }
    .action_button{
        width: 150px;

    }
    table{
        border: 1px solid #111111;
        border-radius: 5px;
    }
    button{
        align-items: center;
        justify-self: center;
        scale: 80%;
        margin-right: 1px;
        
    }
</style>
<script setup >
    
</script>
     
