<template>
  <Nav></Nav>
  <div >
  <form class="m-3 register-form"> 
      <div class="text-center m-2 p-3">
          <h2>Đăng Ký</h2>
      </div>

      <!-- Username input -->
      <div class="form-outline form-floating m-3">
          <input type="text" 
          id="registerUsername" 
          class="form-control" 
          placeholder="Tài Khoản Đăng Nhập"
          v-model="data.username"
          @change="checkUsername" 
          />
          <label class="form-label" for="registerUsername">Tài Khoản Đăng Nhập</label>
      </div>
      <!-- Password input -->
      <div class="form-outline form-floating m-3">
          <input type="password" 
          id="registerPassword" 
          class="form-control" 
          placeholder="Mật Khẩu"
          v-model="data.password"
          />
          <label class="form-label" for="registerPassword">Mật Khẩu</label>
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline form-floating m-3">
          <input type="password" 
          id="registerRepeatPassword" 
          class="form-control" 
          placeholder="Nhập Lại Mật Khẩu"
          v-model="rePass"
          @change = "checkPass"
          />
          <label class="form-label" for="registerRepeatPassword">Nhập Lại Mật Khẩu</label>
      </div>

      <!-- Name input -->
      <div class="form-outline form-floating m-3">
          <input type="text" id="registerName" 
          class="form-control" 
          placeholder="Tài Khoản"
          v-model="data.name" />
          <label class="form-label" for="registerName">Họ và Tên</label>
      </div>

    <!-- Email input -->
    <div class="form-outline form-floating m-3">
      <input type="text" id="registerEmail"
       class="form-control" 
       placeholder="Địa Chỉ Email"
       v-model="data.email"/>
      <label class="form-label" for="registerEmail">Email</label>
    </div>

    <!-- Phone input -->
    <div class="form-outline form-floating m-3">
      <input type="phone" id="registerPhone" 
      class="form-control" 
      placeholder="Số Điện Thoại"
      v-model="data.phone"
      />
      <label class="form-label" for="registerPhone">Số Điện Thoại</label>
    </div>

    <div class="form-outline form-floating m-3">
      <input type="phone" id="registerAddress" 
      class="form-control" 
      placeholder="Số Điện Thoại"
      v-model="data.address"
      />
      <label class="form-label" for="registerAddress">Địa Chỉ</label>
    </div>


    <!-- Checkbox -->
    <div class="form-check d-flex justify-content-center m-3">
      <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
        aria-describedby="registerCheckHelpText" />
      <label class="form-check-label" for="registerCheck">
        Tôi đồng ý với điều khoản của cửa hàng
      </label>
    </div>

    <!-- Submit button -->
      <div class="text-center mb-4">
          <button type="submit" class="btn btn-outline-primary" @click.prevent="DangKi">Đăng Ký</button>               
      </div>

      <div class="text-center mb-2">
        <router-link to="/login">
          <p style="color : black">Đã Có Tài Khoản ? Đăng Nhập Ngay</p>            
        </router-link>
      </div>
  </form>
  
  </div>
</template>
  
<script setup >

  import {ref} from 'vue'
  import AxiosAPI from '../services/api.service'
  import Nav from '../components/Navigation.vue'
  const rePass = ref()
  const data = ref(
    {
      "username": undefined,
      "password": undefined,
      "name": undefined,
      "phone": undefined,
      "email": undefined,
      "role": 1
    })
  
  function checkPass()
  {
    if(data.value.password !== rePass.value) 
    {
      rePass.value = ""
      alert("Mật Khẩu Nhập Lại Chưa ĐÚng")
    }
  }
  async function checkUsername()
  {
    // const result = await AxiosAPI.Login(data.value.username)
    // if(result.isAvailable)
    // {
    //   data.value.username = ''
    //   alert("Tài Khoản Đã Tồn Tại")
    // }
    // return result.isAvailable
  }
  async function DangKi() 
  {
    // if (!data.value.username) return alert('Vui Lòng Nhập Tài Khoản')
    // if (!data.value.password) return alert('Vui Lòng Nhập Mật Khẩu')
    // if (!rePass.value) return alert('Vui Lòng Nhập Lại Mật Khẩu')
    // if (!data.value.name) return alert('Vui Lòng Nhập Tên')
    // if (!data.value.email) return alert('Vui Lòng Nhập Email')
    // if (!data.value.phone) return alert('Vui Lòng Nhập Số Điện Thoại')
    // await AxiosAPI.Register(data.value)
    // data.value = {role : 1}
    // rePass.value = ""
    return alert("Đăng Kí Thành Công")
  }
</script>
  
<style>
.register-form {
  width : 60vw ;
  height: fit-content;
  border-radius: 2%;
  box-shadow: 0px 0px 20px black;
  text-align: center;
  color: black ;
  background: linear-gradient(to right ,  #ed1c24 , #fcee21);
}
.form-control {
  border-radius: 20px ;
}
.form-label {
  color : black ;
}
</style>