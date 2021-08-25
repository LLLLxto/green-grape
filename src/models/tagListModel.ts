const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[]
  fetch: () => string[]
  create: (name: string) => 'success'|'duplicated' //联合类型
  save: () => void
}
const recordListModel: TagListModel = {
  data: [],
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');

  },
  create(name: string) {
    if (this.data.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default recordListModel;