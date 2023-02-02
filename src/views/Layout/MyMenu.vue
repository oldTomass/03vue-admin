<template>

    <el-menu :default-active="route.path" class="el-menu-vertical-demo" :collapse="isClose" background-color="#112f50"
        text-color="#fff" active-text-color="#ffd04b" router>
        <el-menu-item index="">
            <template #title>
                <span>Duolingo-System</span>
            </template>
        </el-menu-item>
        <el-menu-item index="/">
            <el-icon>
                <House />
            </el-icon>
            <span> System-Home </span>
        </el-menu-item>
        <el-sub-menu index="/goods">
            <template #title>
                <el-icon>
                    <Expand />
                </el-icon>
                <span>Product-Manage</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/goods/list">Product-List</el-menu-item>
                <el-menu-item index="/goods/category">Product-Category</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
    // 接收父组件index.vue传值
    props: ["isClose"],
    setup() {
        // // 定义开关，是否展开Menu，false不关闭，true关闭
        // const isCollapse = ref(false) 现在由isClose来决定Menu关闭与否
        // 根据userRoute()中可以获取url中的内容：跳转路径等
        const route = useRoute()

        return {
            // isCollapse,
            route
        }
    }
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    border-right: none;
}
</style>
