<template>
    <div class="menu">
        <MyMenu :isClose="isClose"></MyMenu>
    </div>
    <div class="content" :class="{ active: isClose }">
        <Content :isClose="isClose" @change="change"></Content>
    </div>
</template>
<script>
import { ref } from "vue";
import MyMenu from './MyMenu.vue';
import Content from './Content.vue';

export default {
    components: {
        MyMenu,
        Content
    },
    setup() {
        // 定义变量
        let isClose = ref(false)

        // 根据子组件Content的通知，修改isClose变量
        const change = () => {
            isClose.value = !isClose.value
        }
        return {
            isClose,
            change
        }
    }
}


</script>
<style lang="less" scoped>
.menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #112f50;
}

.content {
    padding-left: 200px;
}

.active {
    padding-left: 64px;
}
</style>