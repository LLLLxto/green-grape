<template>
  <layout class-prefix="layout">
    <NumberPad/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
    <Types/>
  </layout>
</template>

<script>
import NumberPad from '@/components/Charge/NumberPad.vue';
import Types from '@/components/Charge/Types.vue';
import Notes from '@/components/Charge/Notes.vue';
import Tags from '@/components/Charge/Tags.vue';
export default {
  name: 'Charge',
  components: {Tags, Notes, Types, NumberPad},
  data(){
    return{
      tags:['餐饮', '购物', '交通', '住宿']
    }
  }
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}
</style>