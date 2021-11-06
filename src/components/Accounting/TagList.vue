<template>
  <div class="tagList">
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected:selectedTag.indexOf(tag)>=0}"
          @click="select(tag)">{{ tag.name }}
      </li>
    </ul>
    <div class="editTag">
      <button @click="editTag">
        <Icon name="editTag"/>
        <span class="name">编辑</span>
      </button>
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
  selectedTag: Tag[] = [];
  created(){
    this.$store.commit('fetchTagList')
  }
  select(tag: Tag) {
    const index = this.selectedTag.indexOf(tag);
    if (index < 0) {
      this.selectedTag = []
      this.selectedTag.push(tag);
    }
    this.$emit('update:value', this.selectedTag);
  }

  editTag() {
    this.$router.push('editTag');
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";

.tagList {
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

  > .editTag {
    padding-top: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items:center;

    button {
      background:$color-indigo;
      border: none;
      color: #fff;
      border-radius: 12px;
      padding: 2px 6px 1px 6px;
      .name{
        padding-left: 4px;
      }
      .icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>