<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <i class="iconfont guanbi4"></i>
    <div
      style="width: 40%; height: 500px; border: 1px solid rgb(180, 180, 180)"
      id="echarts"
    ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      myChart: null,
    };
  },
  methods: {
    ourChart() {
      let _this = this;
      // 基于准备好的dom，初始化echarts实例
      _this.myChart = this.$echarts.init(document.getElementById("echarts"));
      let option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      //
      _this.myChart.setOption(option);
    },
  },
  created() {
    this.$nextTick(() => {
      this.ourChart();
    });
  },
};
</script>
