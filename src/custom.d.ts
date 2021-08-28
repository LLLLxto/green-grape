type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number //声明数据类型为 number
  createdAt?: Date//声明类（构造函数）为 Date
}
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

interface Window {
  tagList: Tag[];
}