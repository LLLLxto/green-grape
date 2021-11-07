import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createID from '@/lib/createID';
import router from '@/router';
import {defaultExpenseTagList,defaultIncomeTagList} from '@/constants/defaultTagList';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [],
    expenseTagList: [],
    incomeTagList:[],
    count:'0'
  } as RootState,
  mutations: {
    initTagList(state) {
      state.count = window.localStorage.getItem('count') || '0';
      if(state.count === '0'){
        state.expenseTagList = defaultExpenseTagList;
        state.incomeTagList = defaultIncomeTagList;
        state.count = '1'
        window.localStorage.setItem('count', state.count);
        window.localStorage.setItem('expenseTagList', JSON.stringify(state.expenseTagList));
        window.localStorage.setItem('incomeTagList', JSON.stringify(state.incomeTagList));
      }
    },
    fetchTagList(state) {
      state.expenseTagList = JSON.parse(window.localStorage.getItem('expenseTagList') || '[]');
      state.incomeTagList = JSON.parse(window.localStorage.getItem('incomeTagList') || '[]');
    },
    createTag(state, nameType:{name: string, type: string}) {
      if (nameType.type === '+') {
        const names = state.incomeTagList.map(item => item.name);
        if (names.indexOf(nameType.name) >= 0) {
          window.alert('名称已经存在啦');
          return 'duplicated';
        }
        const id = createID().toString();
        state.incomeTagList.push({id: id, name: nameType.name});
        window.localStorage.setItem('incomeTagList', JSON.stringify(state.incomeTagList));
        window.alert('保存成功');
        return 'success';
      }
      else {
        const names = state.expenseTagList.map(item => item.name);
        if (names.indexOf(nameType.name) >= 0) {
          window.alert('名称已经存在啦');
          return 'duplicated';
        }
        const id = createID().toString();
        state.expenseTagList.push({id: id, name: nameType.name});
        window.localStorage.setItem('expenseTagList', JSON.stringify(state.expenseTagList));
        window.alert('保存成功');
        return 'success';
      }
    },

    removeTag(state, tagType) {
      let index = -1;
      if (tagType.type === '+') {
        for (let i = 0; i < state.incomeTagList.length; i++) {
          if (state.incomeTagList[i].id === tagType.tag.id) {
            index = i;
            break;
          }
        }
        if(index >= 0){
          state.incomeTagList.splice(index, 1);
          window.localStorage.setItem('incomeTagList', JSON.stringify(state.incomeTagList));
          window.alert('删除成功');
        }else{
          window.alert('删除失败');
        }
      }
      else {
        for (let i = 0; i < state.expenseTagList.length; i++) {
          if (state.expenseTagList[i].id === tagType.tag.id) {
            index = i;
            break;
          }
        }
        if(index >= 0){
          state.expenseTagList.splice(index, 1);
          window.localStorage.setItem('expenseTagList', JSON.stringify(state.expenseTagList));
          window.alert('删除成功');
        }else{
          window.alert('删除失败');
        }
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
