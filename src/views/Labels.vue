<template>
  <div>
    <Types/>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{tag.name}}</span>
        <Icon name="delete"/>
      </li>
      <!--      <li>-->
      <!--        <span>餐饮</span>-->
      <!--        <Icon name="delete"/>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <span>购物</span>-->
      <!--        <Icon name="delete"/>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <span>交通</span>-->
      <!--        <Icon name="delete"/>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <span>住宿</span>-->
      <!--        <Icon name="delete"/>-->
      <!--      </li>-->
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">添加分类</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Charge/Types.vue';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();

@Component({
  components: {Types}
})
export default class Label extends Vue {
  // createTag(){
  //   this.$router.push('labels/create')
  // }

  tags = tagListModel.data;
  createTag() {
    const name = window.prompt('请输入分类名称');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('分类名称已经存在啦');
      }else if(message === 'success'){
        window.alert('保存成功')
      }
    }
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;

  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-grey;

    svg {
      width: 16px;
      height: 16px;
      color: #333;
    }
  }
}

.createTag {
  @extend %outerShadow;
  background: $color-highlight;
  border: none;
  font-size: 16px;
  color: white;
  border-radius: 4px 4px 0 0;
  height: 54px;
  width: 100vw;

  &-wrapper {
    text-align: center;
    position: fixed;
    bottom: 0;
  }
}
</style>