import router from '@/router';
import createID from '@/lib/createID';
const localStorageKeyName = 'tagList';
const tagStore = {
  tagList: [] as Tag[],
  fetchTags() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  saveTags() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  },
  createTag(name: string) {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('分类名称已经存在啦');
      return 'duplicated';
    }
    const id = createID().toString();
    this.tagList.push({id: id, name: name});
    this.saveTags();
    window.alert('保存成功');
    router.back();
    return 'success';
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  }
};
tagStore.fetchTags()

export default tagStore;
