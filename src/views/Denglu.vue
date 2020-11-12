<template>
  <div id="app">
    <div class="top">
      <h1>项目管理平台</h1>
    </div>
    <div class="dengluyemian">
        <div class="tupian">
            <img src="../assets/u70.png" width="800px;" height="499px;">
        </div>
        <div class="pingtaidenglu">
            <p class="zi">平台登录</p>
            <div id="zhanghao" class="ax_default text_field" data-label="账号" style="left:998px;top:190px;">
              <span class="zh">账号</span><input  v-model="user" id="username"  class="input_one" placeholder="默认admin"  @keyup.enter="denglu1" type="text" value tabindex="0" style="font-size:14px;color:rba(153,153,153);">
            </div>
            <div id="mima" class="ax_default text_field" data-label="账号" style="left:998px;top:190px;">
              <span class="zh">密码</span><input  v-model="pwd" id="pwd"  class="input_one" placeholder="默认123456"  @keyup.enter="denglu1" type="text" value tabindex="0" style="font-size:14px;color:rba(153,153,153);">
            </div>
            <div id="zhanghao" class="ax_default text_field" data-label="账号" style="left:998px;top:190px;">
              <span class="zh3">验证码</span><input class="input_one" placeholder="请输入验证码"  v-model="yzm" @keyup.enter="denglu1" type="text" value tabindex="0" style="font-size:14px;color:rba(153,153,153);">
            </div>
        </div>
        <img src="../assets/yzm.png" class="yzmz">
          <el-button type="primary"  v-on:click="denglu1" class="denglubutton" @keyup="denglu1">登录</el-button>
   
    </div>
  </div>
</template>
<script>
export default {
        data(){
            return{
              username: 'admin',
            password: '123456',
            user: '',
            pwd: '',
            yzm: 'qfnu'
            }
        },
        methods: {
            denglu1() {
                if ("" == this.user) {
                    alert('账号不能为空!');
                } else if ('' == this.pwd) {
                    alert('密码不能为空!');
                } else if ('' == this.yzm) {
                    alert('验证码不能为空!');
                } else if (this.yzm != this.yzm) {
                    alert('验证码不正确!');
                } else if (this.username != this.user || this.password != this.pwd) {
                    alert('账号或者密码错误!');
                } else {
                    alert('登录成功!');
                }
            },
           
        }
        
    
}

</script>
<style scoped>
.yzmz{
  position: absolute;
  top: 370px;
  right: 130px;
}
.denglubutton{
  position: absolute;
  top: 440px;
  width: 300px;
  right: 122px;
}
#zhanghao{
  margin-top: 40px;
  border-bottom: 1px solid #aeaeae;
  margin-left: 20px;
}
#mima{
  margin-top: 40px;
  border-bottom: 1px solid #aeaeae;
  margin-left: 20px;
}
.zh{
  margin-left: 12px;
  color: #2DA9FA;
  margin-right: 30px;
}
.zh3{
  margin-left: 12px;
  color: #2DA9FA;
  margin-right: 16px;
}
.text_field {
    color: #000000;
    text-align: left;
    
}
.ax_default {
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #333333;
    text-align: center;
    line-height: normal;
}
.input_one{
    
    width: 230px;
    height: 40px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    text-decoration: none;
    color: #666666;
    text-align: left;
    border-color: transparent;
    outline-style: none;
}
input {
    padding: 1px 0px 1px 0px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
}
/* #zhanghao{
      border-width: 0px;
    position: absolute;
   
    background: red;

    width: 230px;
    height: 40px;
} */
.zi{
      border-width: 0px;
    width: 65px;
    height: 19px;
    font-size: 16px;
    margin-left: 30px;
    margin-top: 20px;
    color: #2DA9FA; 
}
.tupian{
  float: left;
}
.pingtaidenglu{
  float: right;
  border-width: 0px;
  margin-left: 120px;
  margin-top: 50px;
    /* position: absolute;
    left: 0px;
    top: 0px; */
    width: 345px;
    height: 380px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 5px;
    -moz-box-shadow: 0px 0px 15px rgba(153, 153, 153, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 15px rgba(153, 153, 153, 0.349019607843137);
    box-shadow: 0px 0px 15px rgba(153, 153, 153, 0.349019607843137);
}
.dengluyemian{
  width: 100%;
  height: 499px;
      background-color: rgba(238, 247, 254, 1);
}
.dengluyemian div{
  float: left;
}
h1{
  font-size: 28px;
  color: white;
      font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
        line-height: 80px;
        text-indent: 100px;
}
* {
  margin: 0px;
  padding: 0px;
}
.top {
  width: 100%;
  height: 80px;
  background: rgba(45, 169, 250, 1);
}
</style>