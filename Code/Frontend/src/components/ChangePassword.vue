<template>
    <div class="card">
        <div class="card-header text-center">
            <h4>Đổi Mật Khẩu</h4>
        </div>
        <div class="card-body text-center">
            <div class="row g-3 justify-content-center mb-3">
                <div class="col-4">
                    <label for="username" class="col-form-label">Tài Khoản</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="username" class="form-control " disabled :value='$props.info.username'>
                </div>
            </div>

            <div class="row g-3 align-items-center justify-content-center mb-3">
                <div class="col-4">
                    <label for="passNow" class="col-form-label">Mật Khẩu Hiện Tại</label>
                </div>
                <div class="col-auto">
                    <input type="password" 
                    id="passNow" 
                    class="form-control"
                    v-model="pass"
                    @change="checkPass(pass,props.info.password)">
                </div>
            </div>
            <div class="row g-3 align-items-center justify-content-center  mb-3">
                <div class="col-4">
                    <label for="passNew" class="col-form-label justify-content-start">Mật Khẩu Mới</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="passNew" class="form-control" v-model="newData.password" >
                </div>
            </div>
            <div class="row g-3 align-items-center justify-content-center mb-3">
                <div class="col-4">
                    <label for="rePassNew" class="col-form-label">Nhập Lại Mật Khẩu Mới</label>
                </div>
                <div class="col-auto">
                    <input type="password" 
                    id="rePassNew" 
                    class="form-control"
                    v-model="reNewPass"
                    @change="checkPass2(reNewPass , newData.password)" >
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                <button class="btn btn-outline-success" 
                    type="button" @click="ChangePassword" >
                    Đổi Mật Khẩu</button>
                    <button class="btn btn-outline-danger"
                     type="button"
                     @click.prevent = '$router.go(-1)' >
                        Quay Về
                    </button>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
const props = defineProps(['info'])
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import AxiosAPI from '../services/api.service.js'
const pass = ref()
const reNewPass = ref()
function checkPass(passCheck,passTrue)
{
    if(passCheck != passTrue)
    {
        pass.value = ""
        return alert("Mật Khẩu Chưa Đúng Vui Lòng Nhập Lại")
    }
}
function checkPass2(passCheck,passTrue)
{
    if(passCheck != passTrue)
    {
        reNewPass.value = ""
        return alert("Mật Khẩu Mới Nhập Lại Chưa Đúng Vui Lòng Nhập Lại")
    }
}
const newData = ref({
    password : undefined
})

const router = useRouter()

async function ChangePassword()
{
    if(!pass.value) return alert("Vui Lòng Nhập Mật Khẩu Cũ")
    if(!newData.value.password) return alert("Vui Lòng Nhập Mật Khẩu Mới")
    if(!reNewPass.value) return alert("Vui Lòng Nhập Lại Mật Khẩu Mới")
    const result = await AxiosAPI.UpdateAccount(props.info.UID , newData.value)
    alert(result)
    alert("Đổi Mật Khẩu Thành Công")
    return router.go(-1)
}
</script>

<style scoped>
    .card{
        width: 60vw;
        margin-top: 20vh;
        margin-left: 50%;
        transform: translateX(-50%);
    }
</style>