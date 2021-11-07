type RootState = {
  recordList: RecordItem[],
  expenseTagList: Tag[],
  incomeTagList:Tag[],
  count:string
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
