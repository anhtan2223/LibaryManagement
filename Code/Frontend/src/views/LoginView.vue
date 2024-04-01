<template>
  <Navigation></Navigation>
  <div class="wrap">
    <div class="login-form">
    <form >
      <div class="text-center mt-3">
          <h2 class="mt-3">Đăng Nhập</h2>
      </div>
  
              <!-- Username input -->
      <div class="form-outline form-floating m-4">
          <input type="text" id="registerUsername" 
          class="form-control" 
          placeholder="Tài Khoản Đăng Nhập"
          v-model="inputData.username"
           />
          <label class="form-label" for="registerUsername">Tài Khoản</label>
      </div>
              <!-- Password input -->
      <div class="form-outline form-floating m-4">
          <input type="password" 
          id="registerPassword" class="form-control" 
          placeholder="Mật Khẩu"
          v-model = "inputData.password"
         />
          <label class="form-label" for="registerPassword">Mật Khẩu</label>
      </div>
  
      <span class="text-center">
              <router-link to="/signin">
                <p class="move-register">
                  Chưa Có Tài Khoản ? Đăng Ký Ngay !
                </p>
              </router-link>
      </span>
          <!-- Submit button -->
      <div class="text-center mb-3 mt-3">
          <button type="submit" class="btn btn-outline-primary "
          @click.prevent="Login"
          >Đăng Nhập</button>               
      </div>
    </form>
    {{ inputData }}
    {{ result }}
  </div>
  </div>
</template>

<script setup>
import AxiosAPI from '../services/api.service.js'
import Navigation from '../components/Navigation.vue'

  import {ref} from 'vue'
  import { useRouter } from 'vue-router'
  
  const inputData = ref({
      username : undefined ,
      password : undefined ,
  })

  const router = useRouter()
  const result = ref("Init")

  if(sessionStorage.isLogin)
    router.push(`${sessionStorage.isLogin}`)

  async function Login()
  {
      result.value = await AxiosAPI.Login(inputData.value.username,inputData.value.password)
      
      if(!result.value.isAvailable)
      {
        inputData.value.username = ''
        return alert('Không Tìm Thấy Tài Khoản Đăng Nhập ')
      }

      if(!result.value.isTruePassword)
      {
        inputData.value.password = ''
        return alert('Nhập Sai Mật Khẩu Vui Lòng Nhập Lại')
      }

      const roleTable = {
          1 : "reader" , 
          2 : "employee" ,
          3 : "admin"
      }

      sessionStorage.info = JSON.stringify(result.value.infomation)
      sessionStorage.isLogin = roleTable[result.value.infomation.RoleID]
      
      router.push(`/${sessionStorage.isLogin}`)
  }
</script>

<style scoped>
.login-form {
  /* min-width : 60vw ; */
  border-radius: 5%;
  box-shadow: 0 0 20px #000000;
  color: black ;
  background: linear-gradient(to right , #00ffa9 , #0d4dff);
}
.form-control {
  border-radius: 30px;
}
.form-label {
  color : black ;
}
.move-register {
  text-decoration: none;
  color: black;
}

.wrap {
  margin-top: 20vh;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>