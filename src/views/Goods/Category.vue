<template>
    <!-- 数据表格展示-->
    <div class="data-wrapper">
        <el-table :data="MyTableData" border style="width: 100%">

            <el-table-column label="sentenceEn" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #reference>
                            <div>{{ scope.row.sentenceEn }}</div>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>

            <el-table-column label="sentenceZn" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #reference>
                            <div>{{ scope.row.sentenceZn }}</div>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>

            <el-table-column label="contentType" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #reference>
                            <div>{{ scope.row.contentType }}</div>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column label="contentLevel" width="180">
                <template #default="scope">
                    <el-popover effect="light" trigger="hover" placement="top" width="auto">
                        <template #reference>
                            <div>{{ scope.row.contentLevel }}</div>
                        </template>
                    </el-popover>
                </template>
            </el-table-column>

            <el-table-column label="createdTime" width="180">
                <template #default="scope">
                    <div style="display: flex; align-items: center">
                        <span style="margin-left: 10px">{{ scope.row.createdTime }}</span>
                    </div>
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
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Delete, EditPen } from "@element-plus/icons-vue";
import api from "@/api";
import dayjs from "dayjs";

// table-list-event
const handleEdit = (index, row) => {
    console.log(index, row);
};
const handleDelete = (index, row) => {
    console.log(index, row);
};
// table-list-data
const MyTableData = ref([]);
//   进到页面就直接需要获取数据------

onMounted(() => {
    api.getSentenceByPage(0, 0, 1).then(res => {
        console.log(res.data);
        let arr = res.data;
        // 处理数据
        arr.forEach((element) => {
            //   dayjs 对日期进行格式化处理
            element.createdTime = dayjs(element.createdTime).format(
                "YYYY-MM-DD HH:mm:ss"
            );
        });
        MyTableData.value = res.data;

    })
})

</script>

<style lang="less" scoped>
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
