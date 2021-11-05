import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
  } as RootState,
  mutations: {
    fetchTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        window.alert('名称已经存在啦');
        return 'duplicated';
      }
      const id = createId().toString();
      state.tagList.push({id: id, name: name});
      store.commit('saveTagList');
      window.alert('保存成功');
      // router.back();
      return 'success';
    },
    saveTagList(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if(index >= 0){
        state.tagList.splice(index, 1);
        store.commit('saveTagList');
        window.alert('删除成功');
      }else{
        window.alert('删除失败');
      }
    },

    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record:RecordItem) {
      const record2 = clone(record);
      record2.createdAt = record2.createdAt || new Date().toISOString();
      state.recordList && state.recordList.push(record2);
      store.commit('saveRecordList');
      window.alert('保存成功')
    },
    saveRecordList(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    }
  }
});

export default store;
