<template>
  <layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      type:{{ type }}
      <br/>
      interval:{{ interval }}
    </div>
  </layout>
</template>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
::v-deep .interval-tabs-item {
  font-size:16px;
  background: $color-grey;
  height: 32px;
  &.selected {
    background: $color-highlight;
    &::after {
      display:none;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs}
})
export default class Charts extends Vue {
  type = '-';
  interval = 'week';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
