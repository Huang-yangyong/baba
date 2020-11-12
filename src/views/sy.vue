<template>
    <div class="zhenti">
        <div class="top">
            <div class="zuobian">
            <div class="dayuhao">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="daohangtgiao">
                首页
            </div>
            </div>
            <div class="youbian">
                <div class="dayuhao" style="float:left;margin-right:15px;">
                <i class="el-icon-arrow-right"></i>
            </div>
            <div class="close">关闭标签</div>
            </div>
        </div>
        <div class="zhuti">
            <p class="diyihang">早上好，尊敬的超级管理员</p>
            <div class="liuzhangpng">
                <ul>
                    <li><img src="../assets/one.png"></li>
                    <li><img src="../assets/yiwancheng.png"></li>
                    <li><img src="../assets/three.png"></li>
                    <li><img src="../assets/four.png"></li>
                    <li><img src="../assets/five.png"></li>
                    <li><img src="../assets/six.png"></li>
                </ul>
            </div>
            <div class="daichuli">
                <ul>
                    <li>
                        <div><img src="../assets/daichuli.png"></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                    </li>
                    <li>
                        <div><img src="../assets/daichuli.png"></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                    </li>
                    <li>
                        <div><img src="../assets/daichuli.png"></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                        <div class="mmm"><span style="margin-left:13px;">某某某项目</span><span style="margin-left:160px;">子公司一</span><span style="margin-left:160px;color:#ff9800;">审核</span></div>
                    </li>
                </ul>
            </div>
            <div class="yichangchuan">
                <img src="../assets/changtutu.png" width="95.4%">
                <p class="sss"><span style="margin-right:800px;">项目上报统计</span><span>项目总投资</span></p>
            </div>
            <div style="margin-left:500px;">
                <template>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="top">周</el-radio-button>
                <el-radio-button label="right">月</el-radio-button>
                <el-radio-button label="bottom">年</el-radio-button>
            </el-radio-group>
                </template>
            
                <template>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;margin-left:20px;">
                <el-radio-button label="left">日期范围筛选</el-radio-button>
            </el-radio-group>
                </template>
                <div style="margin-left:480px;display:inline;">
                <template>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                <el-radio-button label="top">周</el-radio-button>
                <el-radio-button label="right">月</el-radio-button>
                <el-radio-button label="bottom">年</el-radio-button>
            </el-radio-group>
                </template>
            
                <template>
            <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;margin-left:20px;">
                <el-radio-button label="left">日期范围筛选</el-radio-button>
            </el-radio-group>
                </template>
            </div>
            </div>
            <div class="twodata">
                <ul>
                    <li><img src="../assets/data.png"></li>
                    <li><img src="../assets/datatwo.png"></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tabPosition: 'left'
      };
    }
}
</script>

<style scoped>
.twodata ul li{
    list-style: none;
    float: left;
    margin-left: 30px;
    margin-right: 30px;
}
.sss{
    position: absolute;
    top: 534px;
    left: 260px;
    color: #2DA9FA;
}
.yichangchuan img{
    margin-left: 27px;
}
.mmm{
    line-height: 50px;
    font-size: 14px;
    color: #333333;
}
.daichuli ul li{
    margin-top: 18px;
    list-style: none;
    float: left;
    width: 500px;
    height: 295px;
    margin-left: 26px;
    margin-right: 24px;
}
.liuzhangpng{
    margin-top: 10px;
}
.liuzhangpng ul li{
    list-style: none;
    float: left;
    margin-right: 10px;
    margin-left: 25px;
}
.diyihang{
    font-size: 14px;
    color: #2DA9FA;
    margin-left: 25px;
    font-weight: bolder;
}
.close{
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    float: right;
}
.youbian ul li:hover{
cursor: pointer;
}
.youbian{
    float: right;
    height: 40px;
    widows: 140px;
    
}
.zuobian{
    width: 140px;
    height: 40px;
    float: left;
}
.zhuti{
    width: 1675px;
    height: 792px;
    background: #FFFFFF;
    margin-top: 5px;
    margin-left: 5px;
}
.zhenti{
    width: 1690px;
    height: 500px;
    background: #EEF7FE;
}
.daohangtgiao:hover{
    cursor: pointer;
}
.daohangtgiao{
    width: 100px;
    margin-top: 5px;
    margin-left: 3px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    color: white;
    height: 30px;
    background: #2DA9FA;
    float: right;
    border-radius: 2px;
}
.dayuhao:hover{
    color: #2DA9FA;
    cursor: pointer;
    font-weight: bolder;
}
.dayuhao{
    font-weight: bold;
    float: left;
    color: #aeaeae;
    margin-top: 5px;
    
    width: 32px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background: #f2f2f2;
}
.top{
    width: 1698px;
    height: 40px;
    background: #ffffff;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 5px;
}
</style>