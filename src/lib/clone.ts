function clone<T>(data: T): T { //表示 data 是什么类型，返回值即为什么类型
  return JSON.parse(JSON.stringify(data));
}

export default clone;