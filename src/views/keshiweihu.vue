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
        <div class="annni">
            <input type="text" placeholder="模糊搜索" style="height:40px;width:250px;margin-left: 20px;"> <el-button type="primary" style="margin-left:10px;">搜索</el-button><el-button>重置</el-button>
        </div>
        <div class="sanchen">
            <el-button type="primary" style="margin-left:10px;">新增</el-button><el-button type="danger">批量删除</el-button>
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
      label="序号"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="科室名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="address"
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
.sanchen{
    margin-top: 10px;
    margin-left: 10px;
}
.annni{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #aeaeae;
    margin-top: 20px;
    
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
        tableData: [{
          date: '1',
          name: '科室一',
          miaosu:'张三',
          qiyexingzhi:'企业',
          fuzeren:'隔壁老张',
          phone:'13899660437',
          daima:'2354023452618063Y',
          caozuo:'查看   编辑   删除'
        }, {
          date: '2',
          name: '科室二',
          miaosu:'李四',
          qiyexingzhi:'企业',
          fuzeren:'隔壁老张',
          phone:'13899660437',
          daima:'2354023452618063Y',
          caozuo:'查看   编辑   删除'
        }, {
          date: '3',
          name: '科室三',
          miaosu:'王五',
          qiyexingzhi:'企业',
          fuzeren:'隔壁老张',
          phone:'13899660437',
          daima:'2354023452618063Y',
          caozuo:'查看   编辑   删除'
        }, {
          date: '4',
          name: '科室四',
          miaosu:'赵六',
          qiyexingzhi:'企业',
          fuzeren:'隔壁老张',
          phone:'13899660437',
          daima:'2354023452618063Y',
          caozuo:'查看   编辑   删除'
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