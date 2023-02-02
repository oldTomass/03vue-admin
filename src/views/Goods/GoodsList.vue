<template>
  <div class="header-search">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="ProductName">
        <el-input v-model="formInline.user" placeholder="ProductName" />
      </el-form-item>
      <el-form-item label="ProductType">
        <el-select v-model="formInline.region" placeholder="ProductType">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Query</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="edit-operator">
    <el-button type="primary" :icon="Plus">add</el-button>
    <el-button type="danger" :icon="Delete">delete</el-button>
  </div>

  <!-- 数据表格展示-->
  <div class="data-wrapper">
    <el-table :data="MyTableData" border style="width: 100%">

      <el-table-column label="Date" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="Name" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #reference>
              <el-tag>{{ scope.row.name }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="Address" width="180">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top" width="auto">
            <template #reference>
              <el-tag>{{ scope.row.address }}</el-tag>
            </template>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="Operator">
        <template #default="scope">
          <el-button size="small" type="primary" :icon="EditPen"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="small" type="danger" :icon="Delete"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <!-- 分页 -->
  <Pagination :total="total" :pageSize="pageSize" @getCurrentPage="getCurrentPage"></Pagination>
</template>
<script setup>
import { reactive, ref } from "vue";
import { Delete, Plus, EditPen } from "@element-plus/icons-vue";
import api from "@/api";
import dayjs from "dayjs";
import { replaceHTMLTag } from "@/utils/utils";
import Pagination from "@/components/Pagination.vue";

// header-Query let
const formInline = reactive({
  user: "",
  region: "",
});
// header-Query event
const onSubmit = () => {
  console.log("submit!");
};

// 父---》子通信：在引入的子组件中直接定义属性传值 分页数据变量,应该通过获取的数据来解析
const total = ref(10);
const pageSize = ref(1);

// 点击分页： 子---》父，子组件触发父组件自定义的事件
const getCurrentPage = (val) => {
  // 父组件触发事件，获取点击页码，更新数据
  console.log("当前点击了：", val);
};

// table-list-event
const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};
// table-list-data
const MyTableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
// const MyTableData = ref([])
// 进到页面就直接需要获取数据------
// 定义一个函数
// const getDataList = async (page) => {
//     let res = await api.getDataList({ page })
//     console.log("获取产品列表---", res.data);

// 处理数据
// let arr = res.data
// arr.forEach(element => {
// utils 处理htmlTag
// element.desc = replaceHTMLTag(element.desc)
// dayjs 对日期进行格式化处理
// element.createdTime = dayjs(element.createdTime).format('YYYY-MM-DD HH:mm:ss')
// });

//     MyTableData.value = res.data
// }
// getDataList(1)
</script>

<style lang="less" scoped>
.header-search {
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 5px;
}

.el-form-item {
  margin-bottom: 0;
}

.edit-operator {
  margin-top: 10px;
  margin-bottom: 10px;
}

.data-wrapper {
  margin-top: 15px;
}
</style>
