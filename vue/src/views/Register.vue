<template>

    <el-form :model="form" :rules="rules" ref="registerForm" label-width="100px" class="register-form">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
            <el-input type="password" v-model="form.confirmPassword"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="Register()">注册</el-button>
            <el-button @click="return1()">返回</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                confirmPassword: '',
                email: ''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '密码长度在6-20个字符之间', trigger: 'blur' }
                ],
                confirmPassword: [
                    { required: true, message: '请确认密码', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value !== this.form.password) {
                                callback(new Error('两次输入的密码不一致'));
                            } else {
                                callback();
                            }
                        },
                        trigger: 'blur'
                    }
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]
            }
        };
    },
    methods: {
        Register() {
            this.$refs.registerForm.validate(valid => {
                if (valid) {
                    // 调用注册接口进行注册操作
                    // ...
                    sessionStorage.clear();
                    this.$router.push('/');
                } else {
                    console.log('表单验证失败');
                    return false;
                }
            });
        },
        return1() {
            this.$router.push('/');
            history.pushState(null, null, document.URL);
            window.addEventListener("popstate",function(e) {
                history.pushState(null, null, document.URL);
            }, false);
        }
    }
};
</script>

<style>
.register-form {
    padding-left: 1100px;
    padding-right: 100px;
    padding-top: 200px;
    padding-bottom: 200px;
    max-width: 400px;
    color: black;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}
</style>
