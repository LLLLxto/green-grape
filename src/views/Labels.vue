<template>
  <div>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <div class="deleteTag" >
          <Icon name="delete"/>
        </div>
      </li>
    </ol>
    <FooterButton class="createTag" @click="createTag">添加分类</FooterButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Charge/Types.vue';
import tagListModel from '@/models/tagListModel';
import FooterButton from '@/components/FooterButton.vue';

tagListModel.fetch();

@Component({
  components: {FooterButton, Types}
})
export default class Label extends Vue {
  tags = tagListModel.data
  createTag() {
    this.$router.push('labels/create');
  }

  // remove() {
  //   if (this.tag) {
  //     tagListModel.remove(this.tag.id);
  //   }
  // }


  // createTag() {
  //   const name = window.prompt('请输入分类名称');
  //   if (name) {
  //     const message = tagListModel.create(name);
  //     if (message === 'duplicated') {
  //       window.alert('分类名称已经存在啦');
  //     }else if(message === 'success'){
  //       window.alert('保存成功')
  //     }
  //   }
  // }

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


</style>