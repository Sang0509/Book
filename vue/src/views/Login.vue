<template>
    <div class="login-container">
        <el-form ref="form" :model="form" :rules="rules" class="login-form">
            <h2 class="login-title">登录</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">登录</el-button>
                <el-button type="primary" @click="register()">注册</el-button>
                <el-button type="primary" @click="submitForm">忘记密码</el-button>
            </el-form-item>


        </el-form>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        register(){
            this.$router.push('/Register');
            history.pushState(null, null, document.URL);
            window.addEventListener("popstate",function(e) {
                history.pushState(null, null, document.URL);
            }, false);
        },
        submitForm() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // TODO: 发送登录请求
                } else {
                    console.log('登录信息填写不完整')
                    return false
                }
            })
        }
    }
}
</script>

<style>
body{
    background-image: url("../assets/login.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
}
.login-container {
    padding-left: 1250px;
    padding-right: 100px;
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.login-form {
    width: 400px;
    padding: 30px;
    background-color: #f0f2f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
