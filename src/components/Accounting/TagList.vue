<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTags.indexOf(tag)>=0}"
          @click="select(tag)">{{ tag.name }}
      </li>
    </ul>
    <div class="settings">
      <button @click="manageLabels">添加分类</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
@Component
export default class TagList extends Vue {
  get tagList() {
    return this.$store.state.tagList;
  }
  selectedTags: string[] = [];
  created(){
    this.$store.commit('fetchTags')
  }
  select(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index < 0) {
      this.selectedTags = []
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }
    // if (index >= 0) {
    //   this.selectedTags.splice(index, 1);
    // } else {
    //   this.selectedTags.push(tag);
    // }
    // this.$emit('update:value', this.selectedTags);

  manageLabels() {
    this.$router.push('labels');
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tags {
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      background: $color-grey;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;

      &.selected {
        background: $color-highlight;
      }
    }
  }

  > .settings {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>