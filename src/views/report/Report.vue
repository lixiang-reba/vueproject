<template>
    <div>
        <!-- 面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>数据统计</el-breadcrumb-item>
            <el-breadcrumb-item>数据报表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div id="main" style="width: 800px;height:400px;"></div>
        </el-card>
    </div>
</template>

<script>
// 引入echarts
import * as echarts from "echarts";
// 为echarts准备一个DOM
export default {
    data() {
        return {
            // 需要合并的选项
            options: {
                title: {
                    text: '用户来源'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#E9EEF3'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        boundaryGap: false
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ]
            }
        }
    },
    methods: {

    },
    async mounted() {
        // 基于准备好的dom 初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'))
        const { data: res } = await this.$http.get('reports/type/1')
        if (res.meta.status !== 200) {
            return this.$message.error('获取时间统计数据失败')
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption({ ...this.options, ...res.data });
    },
}
</script>

<style>

</style>