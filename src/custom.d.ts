type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //声明数据类型
  createdAt?:Date//声明类（构造函数）
}

export default  RecordItem