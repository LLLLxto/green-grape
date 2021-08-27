const localStorageKeyName = 'tagList';
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' //联合类型
  save: () => void
  remove: (id: string) => boolean
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data =  JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data

  },
  create(name: string) {
    // this.data = [{id:'奶茶', name:'奶茶'}, {id:'冰淇淋', name:'冰淇淋'}]
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    return true;
  }
};
export default tagListModel;