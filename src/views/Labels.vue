<template>
  <div>
    <div class="navBar">
      <Icon name="back" class="backIcon" @click="goBack"/>
      <span class="rightHolder"></span>
    </div>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <div class="removeTag" @click="remove(tag)">
          <Icon name="delete"/>
        </div>
      </li>
    </ol>
    <FooterButton class="createTag" @click="createLabel">添加分类</FooterButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Types from '@/components/Charge/Types.vue';
import FooterButton from '@/components/FooterButton.vue';

@Component({
  components: {FooterButton, Types},
})
export default class Label extends Vue {
  get tags() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit('fetchTags');
  }

  goBack() {
    this.$router.back();
  }

  createLabel() {
    this.$router.push('labels/create');
  }

  remove(tag: { id: string, name: string } | undefined) {
    if (tag) {
      this.$store.commit('removeTag', tag.id);
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

    > .removeTag {
      height: 40px;
      display: flex;
      align-items: center;
    }

    svg {
      width: 16px;
      height: 16px;
      color: #333;
    }
  }
}


</style>