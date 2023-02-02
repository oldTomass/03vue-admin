<template>
  <el-pagination
    v-model:current-page="currentPage"
    v-model:page-size="props.pageSize"
    layout="total, prev, pager, next, jumper"
    :total="props.total"
    @current-change="handleCurrentChange"
  />
</template>

<script setup>
import { ref } from "vue";

const currentPage = ref(1);

// const pageSize = ref(10);
// const total = ref(100);
// 父---》子通信：通过props来接收父组件传递过来的数据
const props = defineProps(["total", "pageSize"]);

// 子---》父通信：自定义事件
const emit = defineEmits(["getCurrentPage"]);

// 子组件中点击页码触发事件，回调传递给父组件的事件
const handleCurrentChange = (val) => {
  //   console.log(`current page: ${val}`);
  emit("getCurrentPage", val);
};
</script>

<style lang="less" scoped></style>
