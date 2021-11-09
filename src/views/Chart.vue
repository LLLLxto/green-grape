<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <div class="legend">

    </div>
    <div class="chart-wrapper" ref="chartWrapper" v-if="groupedList.length>0">
      <Chart class="chart" :options="chartOptions"/>
    </div>
    <div v-else class="no-result">
      <span>暂无记录</span>
    </div>
    <Nav slot="footer"></Nav>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import Chart from '@/components/Chart.vue';
import _ from 'lodash';
import day from 'dayjs';

@Component({
  components: {Tabs, Chart},
})
export default class Charts extends Vue {
  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth; //一开始就在滚到最后
  }

  get keyValueList() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today)
          .subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.groupedList, {
        title: dateString
      });
      array.push({
        key: dateString, value: found ? found.total : 0
      });
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }

  get chartOptions() {
    const keys = this.keyValueList.map(item => item.key);
    const values = this.keyValueList.map(item => item.value);
    return {
      grid: {
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {alignWithLabel: true}, //刻度线和标签对齐
        axisLine: {lineStyle: {color: 'rgb(6, 51, 70)'}},
        axisLabel: {
          formatter: function (value: string, index: number) {
            return value.substr(5); //只显示 MM-DD
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        symbol: 'circle', //点设置成实心的
        symbolSize: 12, //改变点的大小
        itemStyle: {borderWidth: 1, color: 'rgb(183, 201, 161)', borderColor: 'rgb(183, 201, 161)'},
        data: values,
        type: 'line'
      }],
      tooltip: {
        show: true,
        triggerOn: 'click',
        position: 'top',
        formatter: '{c}',
        backgroundColor: 'rgb(6, 51, 70)'
      }
    };
  }
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get groupedList() {
    const {recordList} = this;
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {return [];}
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  }

  beforeCreate() {
    this.$store.commit('fetchRecordList');
  }

  type = '-';
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
//.echarts {
//  max-width: 100%;
//  height: 400px;
//}

.no-result {
  padding: 16px;
  text-align: center;
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item;
}

.record {
  background: white;
  @extend %item;
}

//.notes {
//  margin-right: auto;
//  margin-left: 16px;
//  color: #999;
//}

.chart {
  width: 430%;

  &-wrapper {
    overflow: auto;

    &::-webkit-scrollbar { //隐藏PC端滚动条（shift+鼠标滚轮可进行左右滚动）
      display: none;
    }
  }
}
</style>