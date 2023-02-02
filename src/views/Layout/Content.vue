<template>
    <div class="header">
        <!-- Content-Header-Icon：控制Menu-折叠、展开-->
        <div class="icon">
            <el-icon v-if="isClose" @click="change">
                <Expand />
            </el-icon>
            <el-icon v-else @click="change">
                <Fold />
            </el-icon>
        </div>
        <!-- Content-Header-Time -->
        <div class="right">
            <div class="time">{{ time }}</div>
            <div class="loginout" @click="out">
                <el-icon>
                    <SwitchButton />
                </el-icon>
            </div>
        </div>
    </div>
    <div class="wrapper">
        <router-view></router-view>
    </div>

</template>
<script>
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

export default {

    props: ['isClose'],
    emit: ['change'],
    setup(props, { emit }) {

        let time = ref(null)
        const router = useRouter()

        // 点击icon切换Menu折叠或展开
        // props 只读不能修改，子组件通知父组件修改,在父组件中接收当前传递过去的change事件，通过定义change事件修改
        const change = () => {
            emit('change')
        }

        // 生命周期函数，自动读取系统时间
        onMounted(() => {
            time.value = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
        })

        // 推出登录---跳转login页面
        const out = () => {
            router.push('/login')
        }
        return {
            change,
            time,
            out
        }

    }

}
</script>
<style lang="less" scoped>
.header {
    height: 50px;
    line-height: 50px;
    background-color: #1e78bf;
    color: white;
    display: flex;

    .icon {
        font-size: 24px;
        flex: 1;

        i {
            // 图标解析完之后时 i 标签，设置鼠标悬浮变小手
            cursor: pointer;
        }
    }
}

.right {
    padding-right: 20px;
    display: flex;

    .time {
        font-size: 16px;
    }

    .loginout {
        margin-left: 10px;
    }
}

.wrapper {
    margin: 10px;
}
</style>