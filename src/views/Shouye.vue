<template>
    <div id="app">
        <div class="top">
            <div class="topleft">
                <p class="topleftzi">企业项目管理平台</p>
            </div>
            <div class="topright">
                <ul>
                    <li><i class="el-icon-s-fold"></i></li>
                    <li><i class="el-icon-s-marketing"></i></li>
                    <li><i class="el-icon-data-board"></i></li>
                    <li><i class="el-icon-refresh-left"></i></li>
                </ul>
                <div class="date">
                 {{date|filtersdata}}
             </div>
            </div>
        </div>
        <div class="ercen">
            <div class="cebianlan">
                <div class="sousuokuang">
                <input type="text" style="width:176px;height:24px;border-radius:5px;margin-left:6px;"><i class="el-icon-search" style="margin-left:5px;color:white;margin-top:2px;"></i>
                </div>
                <div>
                     <el-col :span="24" style="background:#333333;">
    <br/>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link tag="div" class="sy" to="/sy1" style="margin-left:26px;">首页</router-link>
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" class="sy" to="/caozuorizhi" style="margin-left:0px;">操作日志</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" class="sy" to="/queseguanli" style="margin-left:0px;">角色管理</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="div" class="sy" to="/quanxianguanli" style="margin-left:0px;">权限管理</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link tag="div" class="sy" to="/qiyeguanli" style="margin-left:0px;">企业管理</router-link></el-menu-item>
          <el-submenu index="1-4">
              <template slot="title">
              <span slot="title">基础维护</span>
              </template>
              <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" class="sy" to="/gongsiweihu" style="margin-left:0px;">公司维护</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" class="sy" to="/keshiweihu" style="margin-left:0px;">科室维护</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="div" class="sy" to="/zhichifangshi" style="margin-left:0px;">支持方式</router-link></el-menu-item>
          <el-menu-item index="1-4"><router-link tag="div" class="sy" to="/zhuguanbumen" style="margin-left:0px;">主管部门</router-link></el-menu-item>
              </el-menu-item-group>
              </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="3">
          <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">公告发布</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" class="sy" to="/xiangmufabu" style="margin-left:0px;">项目发布</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" class="sy" to="/tongzhifabu" style="margin-left:0px;">通知发布</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="div" class="sy" to="/cankaocailiao" style="margin-left:0px;">参考材料</router-link></el-menu-item>
        </el-menu-item-group>        
      </el-submenu>
      <el-submenu index="4">
          <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">项目填报</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" class="sy" to="/zijinleitianbao" style="margin-left:0px;">资金类填报</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" class="sy" to="/kejileitianbao" style="margin-left:0px;">科技类填报</router-link></el-menu-item>
          <el-menu-item index="1-3"><router-link tag="div" class="sy" to="/ronyuleitianbao" style="margin-left:0px;">荣誉类填报</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
          <template slot="title">
        <i class="el-icon-eleme"></i>
        <span slot="title">进度管理</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="1-1"><router-link tag="div" class="sy" to="/zijinleijindu" style="margin-left:0px;">资金类进度</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link tag="div" class="sy" to="/kejileijindu" style="margin-left:0px;">科技类进度</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
          <template slot="title">
        <i class="el-icon-folder-checked"></i>
        <span slot="title">验收管理</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="1-1">资金类验收</el-menu-item>
          <el-menu-item index="1-2">科技类验收</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="7">
          <template slot="title">
        <i class="el-icon-s-order"></i>
        <span slot="title">项目档案</span>
          </template>
          <el-menu-item-group>
          <el-menu-item index="1-1">项目文件</el-menu-item>
          <el-menu-item index="1-2">审计报告</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="8">
          <template slot="title">
        <i class="el-icon-platform-eleme"></i>
        <span slot="title">项目总览</span>
          </template>
      </el-menu-item>

      <el-menu-item index="9">
          <template slot="title">
        <i class="el-icon-delete"></i>
        <span slot="title">回收站</span>
          </template>
      </el-menu-item>
    </el-menu>
  </el-col>

                </div>
            </div>
            <div class="neiron">
               <keep-alive>
                  <router-view></router-view>
               </keep-alive>
            </div>
        </div>
    </div>
</template>
<style scoped>
.sy{
  width: 100px;
  height: 50px;
}
.syhuxing{
    background: #333333;
    color: yellow;
}
.sousuokuang{
    margin-top: 5px;
    outline: none;
}
.sousuokuang input{
    
    outline: none;
}
.neiron{
    float: right;
    height: 841px;
    width: 83.9%;
   
    
}
.cebianlan{
    border-right: 1px solid white;
    width: 16%;
    height: 841px;
    background: #333333;
    float: left;
}
.ercen{
    width: 100%;
    height: 841px;
}
h1{
    position: absolute;
    right: 290px;
    margin-top: 15px;
    color: white;
    font-size: 14px;
    z-index: 999;
    font-weight: 400;
}
.el-icon-refresh-left{
    color: white;
}
.el-icon-data-board{
    color: white;
}
.el-icon-s-marketing{
    color: white;
}
.el-icon-s-fold{
    color: white;
}
.topright ul li{
    list-style: none;
    float: left;
    line-height: 50px;
    width: 52px;
    text-align: center;
    height: 40px;
}
.topright ul li:hover{
    border-top: 3px solid white;
    cursor: pointer;
}
.topleftzi{
    color: white;
    text-align: center;
    line-height: 50px;
    font-weight: bold;
}
.topleft{
    width: 16%;
    height: 50px;
    background-color: rgba(45, 169, 250, 1);
    border-right: 1px solid white;
    float: left;
}
.topright{
    float: right;
    width: 83.9%;
    height: 50px;
    background-color: rgba(45, 169, 250, 1);
}
*{
    margin: 0px;
    padding: 0px;
}
.top{
    width: 100%;
    height: 50px;
    
}
.date{
  color: white;
  display: inline;
  line-height: 50px;
  margin-left: 400px;
}
</style>

<script>
 var datatime = function(str) {
            return str > 10 ? str : '0' + str;
        }

export default {
    
    data(){
        return{
            date:new Date()
        }
    },
    filters:{
        // formateTime:function(val){
        //     var date = new Date(val);
        //     var year = date.getFullYear();
        //     var month = parseDate(date.getMonth()+1);
        //     var day = parseDate(date.getDate());
        //     var hours = parseDate(date.getHours());
        //     var min = parseDate(date.getMinutes());
        //     var sec = parseDate(date.getSeconds());
        //     return year +'-'+month +'-'+day+' '+hours +":"+min+":"+sec;
            
        // }
        filtersdata: function(val) {
                    var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
                    var date = new Date(val);
                    var year = date.getFullYear();
                    var yue = datatime(date.getMonth() + 1);
                    var day = datatime(date.getDate());
                    var shi = datatime(date.getHours());
                    var min = datatime(date.getMinutes());
                    var we=date.getDay();
                    var we2=week[we];
                    var s = datatime(date.getSeconds());
                    return year + '年' + yue + '月' + day + '日  '+we2+'  '+ shi + ':' + min + ':' + s
                }
            },
            created() {
                var this2 = this;
                setInterval(function() {
                    this2.date = new Date();
                })
    },
   created:function(){
        var that = this;
        this.timer = setInterval(function(){
            that.date = new Date();
        },1000)
    },
    beforeDestroy:function(){
        if(this.timer){
            clearInterval(this.timer);
        }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
        
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      
    }
}


</script>


