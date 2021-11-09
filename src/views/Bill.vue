<template>
  <Layout>
    <Tabs slot="header" class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <ol v-if="groupedList.length>0">
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}
          <span>￥{{ group.total }}</span>
        </h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span class="tag">{{ tagString(item.selectedTag) }}</span>
            <span class="note">{{ item.note }}</span>
            <span v-if="type==='+'" style="color:#080;">￥{{ item.amount }} </span>
            <span v-if="type==='-'" style="color:#f00;">￥{{ item.amount }} </span>
          </li>
        </ol>
      </li>
    </ol>
    <div v-else class="no-result">
      暂无记录
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

@Component({
  components: {Tabs},
})
export default class Bill extends Vue {
  type = '-';
  recordTypeList = recordTypeList;
  beforeCreate() {
    this.$store.commit('fetchRecordList');
  }

  tagString(selectedTag: Tag[]) {
    return selectedTag.length === 0 ? '无' : selectedTag.map(t=>t.name).join('，');
  }

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
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

}
</script>

<style scoped lang="scss">
@import "src/assets/style/helper.scss";
.no-result{
  padding:16px;
  text-align:center;
}
%item {
  padding: 8px 16px;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  font-size:16px;
  color:$color-highlight;
  @extend %item;
  background: $color-grey;
}

.record {
  @extend %item;
  font-size:14px;
}

.note {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
