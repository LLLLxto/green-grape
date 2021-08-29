import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
import router from '@/router';

const store = {
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('分类名称已经存在啦');
    } else if (message === 'success') {
      window.alert('保存成功');
      router.back();
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  }
};

export default store;