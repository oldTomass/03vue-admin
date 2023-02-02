<template>
    <div>
        <h1>Home：以下测试数据</h1>
        <div v-for="user in users.data" key="user.userName">
            <h1>{{ user.userName }} -- {{ user.number }} -- {{ user.createdTime }}</h1>
        </div>
        <div id="echarts" style="width:600px;height:400px;"></div>

    </div>
</template>
<script>
import api from '@/api/index'
import { reactive, inject, onMounted } from 'vue';

export default {
    setup() {
        // 定义数据对象接收数据
        let users = reactive({ data: {} })

        // 引入echarts
        const echarts = inject('echarts')
        // 请求首页数据
        api.getHome().then(res => {
            // console.log(res.data); // Array
            // user = res.data 不能直接给响应式对象赋值
            users.data = res.data
        })
        onMounted(() => {
            var myChart = echarts.init(document.getElementById('echarts'));

            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }
                ]
            };
            myChart.setOption(option);
        })

        return {
            users
        }
    }

}
</script>
<style lang="less" scoped>

</style>