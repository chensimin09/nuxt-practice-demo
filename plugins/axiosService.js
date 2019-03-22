import { pageApi, getBaseDate } from '@/factory/api'

export const page = {
  getPageData: (axios, params) =>
    doPromise(axios.get(pageApi.tableData, params))
}

export const baseDate = {
  getBaseDate: (axios, params) => doPromise(axios.post(getBaseDate.date))
}

async function doPromise(promise) {
  const { data } = await promise
  return data
}
