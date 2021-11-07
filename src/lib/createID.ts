let id: number = parseInt(window.localStorage.getItem('_idMax') || '14') || 14; //保底得到一个字符串，保底一个数字

function createID() {
  id++;
  window.localStorage.setItem('_idMax', id.toString());
  return id;
}

export default createID;