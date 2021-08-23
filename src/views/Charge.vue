<template>
  <layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
    {{recordList}}
  </layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number //声明数据类型
  createdAt?:Date//声明类（构造函数）
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})
export default class Charge extends Vue {
  recordList:Record[]= JSON.parse(window.localStorage.getItem('recordList') || '[]')

  record: Record = {
    tags: [], notes: '', type: '-', amount: 0
  };

  saveRecord(){
    const record2:Record = JSON.parse(JSON.stringify(this.record))
    record2.createdAt = new Date()
    this.recordList.push(record2)
  }
  @Watch('recordList')
  onRecordListChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  }


  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  tags = ['餐饮', '购物', '交通', '住宿'];

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>