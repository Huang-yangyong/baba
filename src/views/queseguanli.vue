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
        <div class="sige">
            <ul>
                <li><select>
                    <option>请选择公司
                        </option>
                        <option>某某某公司
                        </option>
                        <option>某某某公司
                        </option>
                        </select></li>
                <li><select>
                    <option>请选择角色
                        </option>
                        <option>某某某公司
                        </option>
                        <option>某某某公司
                        </option>
                        </select></li>
                <li><select>
                    <option>是否启用
                        </option>
                        <option>某某某公司
                        </option>
                        <option>某某某公司
                        </option>
                        </select></li>
                <li><select>
                    <option>模糊搜索
                        </option>
                        <option>某某某公司
                        </option>
                        <option>某某某公司
                        </option>
                        
                        </select></li>
                      <div><el-button type="primary">搜索</el-button><div style="float:right;margin-right:380px;"><el-button>重置</el-button></div>  </div>
            </ul>
        </div>
        <div>
              <el-button type="primary">新增</el-button>
               <el-button type="danger">批量删除</el-button>
               <el-button>重置按钮</el-button>
        </div>
        <div>
            <template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    
    <el-table-column
      prop="xuhao"
      label="序号"
      width="200">
    </el-table-column>
    <el-table-column
      label="操作时间"
      width="300">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="操作人"
      width="250">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号（登录账号）"
      width="200">
    </el-table-column>
    <el-table-column
      prop="miaosu"
      label="描述"
      width="320">
    </el-table-column>
    <el-table-column
      prop="ip"
      label="ip"
      width="280">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作功能"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>
        </div>
        <div class="fenye">
            <div style="width: 50px;
    height: 26px;
    text-align: center;
    line-height: 26px;">上一页</div>
            <div class="sss">1</div>
            <div class="sss">2</div>
            <div class="sss">3</div>
            <div class="sss">4</div>
            <div class="sss">5</div>
            <div class="sss">...</div>
            <div class="sss">20</div>
            <div style="width: 50px;
    height: 26px;
    text-align: center;
    line-height: 26px;">下一页</div>
    <div style="border:none;margin-right:-15px;">每页</div>
    <el-dropdown>
  <span class="el-dropdown-link">
    10<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>10</el-dropdown-item>
    <el-dropdown-item>20</el-dropdown-item>
    <el-dropdown-item>50</el-dropdown-item>
    <el-dropdown-item>100</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
<div style="border:none;margin-right:-15px;margin-left:-13px;">条</div>
        <div style="border:none;margin-right:-15px;">跳转</div>
        <div><input style="width:35px;height:25px;margin-left:0px;"></div>
        <div style="border:none;margin-right:0px;margin-left:3px;">页</div>
        <input type="text" placeholder="GO" style="width:35px;height:25px;margin-left:18px;">
        </div>
    </div>
</template>

<style scoped>
.shangyiye{
    width: 50px;
    height: 26px;
    text-align: center;
    line-height: 26px;
}
.fenye div:nth-of-type(2){
    background: #2DA9FA;
    color: white;
}
.fenye div:hover{
    color: #2DA9FA;
    border: 1px solid #2DA9FA;
    cursor: pointer;
}
.fenye div{
        border-color: rgb(215, 215, 215);
            color: rgb(102, 102, 102);
            font-size: 14px;
            margin-left: 10px;
    float: left;
    border: 1px solid #aeaeae;
    text-align: center;
    width: 40px;
    height: 26px;
    line-height: 26px;
}
.sige ul li{
    list-style: none;
    float: left;
    margin-left: 10px;
    margin-right: 30px;
}
.sige{
    margin-top: 20px;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #aeaeae;
}
.sige select {
    width: 250px;
    height: 40px;
    border: 1px solid #aeaeae;
    color: #aeaeae;
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
.zhenti{
    width: 1690px;
    height: 500px;
    background: #EEF7FE;
}
</style>
<script>
export default {
    
  data() {
      return {
          input:'',
        tableData: [{
            xuhao:'1',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
          
        }, {
            xuhao:'2',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }, {
            xuhao:'3',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }, {
            xuhao:'4',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }, {
            xuhao:'5',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }, {
            xuhao:'6',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }, {
            xuhao:'7',
          date: '2020-08-08  09:25:04',
          name: '小胖',
          address: '项目填报',
          miaosu:'点击了填报按钮',
          ip:'198.126.1.1',
          phone:'手机号(登陆账号)'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }

</script>