type RootState = {
  recordList: RecordItem[],
  tagList: Tag[]
}

type RecordItem = {
  tag: Tag
  note: string
  type: string
  amount: number
  createdAt?: string
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
  store: {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void
  };
}