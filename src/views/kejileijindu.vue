<template>
    <div class="zhenti">
        <div class="top">
            <el-select class="leix"  v-model="value" placeholder="项目主管部门">
      <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
    </el-select>
  <el-select class="ccc" v-model="value2" placeholder="项目下沉公司">
      <el-option
      v-for="item2 in options2"
      :key="item2.value"
      :label="item2.label"
      :value="item2.value">
    </el-option>
    
  </el-select>
  <el-select class="hhh" v-model="value2" placeholder="模糊搜索">
      <el-option
      v-for="item2 in options2"
      :key="item2.value"
      :label="item2.label"
      :value="item2.value">
    </el-option>
    
  </el-select>
  <el-button type="primary">搜索</el-button><el-button>重置</el-button>

        </div>
        <div class="dsaasd">

        </div>
        <div class="ssaas">
            <el-row class="anniu">
                <el-button type="primary" class="">进度填报</el-button>
<el-button type="primary" class="">新增</el-button>
<el-button type="danger">批量删除</el-button>
<el-button class="smm">导出</el-button>
<el-button class="smm">通过</el-button>
<el-button class="smm">驳回</el-button>
<el-button class="smm">提交</el-button>
<el-button class="smm">导出</el-button>
</el-row>
       
  </div> 
      <div class="div_main" style="margin-top:20px;">
        <el-row class="anniu">

</el-row>
<el-table
    class="eltab"
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
      width="50">
      <template slot-scope="scope">{{ scope.row.id }}</template>
    </el-table-column>
    <el-table-column
      prop="cailiao"
      label="参考材料"
      width="220">
    </el-table-column>
    <el-table-column
      prop="beizhu"
      label="备注"
      width="280"
      show-overflow-tooltip>
    </el-table-column>

    <el-table-column
      prop="name"
      label="上传公司名称"
      width="180"
      show-overflow-tooltip>
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
           <el-button
          size="mini"
          type="primary"
          @click="handleDelete(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>
      <div class="foot">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
        </div>
    </div>
</template>

<style scoped>

.smm{
    margin-left: 10px;
}
.ssaas{
    margin-left: 20px;
    margin-top: 20px;
}
.dsaasd{
    width: 100%;
    height: 1px;
    margin-top: 20px;
    background: #aeaeae;
}
.skl{
    float: left;
}
.sssss div{
    float: left;
}
.sssss{
    
    margin-right: 20px;
    margin-top: 20px;
}
.erchen{
    width: 850px;
    height: 100px;
  
}
.hhh{
    margin-left: 110px;
}
.ggg{
    margin-left: 20px;
}
.el-select{
    margin-top: 20px;
}
.vvv{
    margin-left: 100px;
}
.ccc{
    margin-left: 100px;
}
.ddd{
    margin-left: 20px;
}
.zhenti{
    width: 1690px;
    height: 500px;
    background: #EEF7FE;
}

  .sousuo1{
    margin-left: 10px;
  }
  .leix{
    width: 240px;
    margin-left: 20px;
    
  }
  .riqi{
    margin: 0 85px;
    width: 240px;
  }
  .el-input{
    width: 240px;
  }
</style>

<script>
export default {
   data() {
      return {
        tableData: [{
          id:1,
          name:'AAAA公司',
          beizhu:'无',
          cailiao:'申报国家外贸基地通知.doc'
        }, {
           id:2,
          name:'BBBB公司',
         beizhu:'无',
          cailiao:'申报国家外贸基地通知.doc'
        }
        , {
           id:3,
          name:'CCCC公司',
           beizhu:'无',
          cailiao:'申报国家外贸基地通知.doc'
        }
        , {
          id:4,
          name:'DDDD公司',
          beizhu:'无',
          cailiao:'申报国家外贸基地通知.doc'
        }
        , {
           id:5,
          name:'EEEE公司',
           beizhu:'无',
          date: '2020-08-08',
          cailiao:'申报国家外贸基地通知.doc'
        }
         ],
        multipleSelection: [],
        input: '',
        options: [{
          value: '选项1',
          label: '发改'
          
        }, {
          value: '选项2',
          label: '工信'
        }, {
          value: '选项3',
          label: '科技'
        }, {
          value: '选项4',
          label: '商务'
        }],
        value: '',
        value2: '',
          options2: [{
          value: '选项1',
          label: '2018/08/08-2018/12/08'
          
        }, {
          value: '选项2',
          label: '2019/08/08-2019/11/08'
        }, {
          value: '选项3',
          label: '2019/11/08-2020/01/01'
        }, {
          value: '选项4',
          label: '2020/01/01-2020/11/11'
        }]
      }
    },
    methods: {
       handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
}
</script>