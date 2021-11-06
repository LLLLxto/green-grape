type RootState = {
  recordList: RecordItem[],
  tagList: Tag[]
}
type RecordItem = {
  selectedTag: Tag[]
  note: string
  type: string
  amount: number
  createdAt?: string
}
type Tag = {
  id: string;
  name: string;
}
