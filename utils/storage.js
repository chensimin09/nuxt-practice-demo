import { Common } from '@/factory/common'

const local = localStorage
const session = sessionStorage

const version = Common.version
const symbol = Common.symbol

/*
 * localStorage 和 sessionStorage 的相关操作
 * @param key 键值
 * @param val value
 * @param isRemove 是否需要删除
 * @param noVersion 是否需要添加版本
*/

const getVersionKey = key => {
  return (
    key +
    symbol.underline +
    this.specialVersion +
    symbol.underline +
    version.curr
  )
}

export function setLocal(key, val, noVersion) {
  if (!key) return
  if (noVersion) local.setItem(key, JSON.stringify(val))
  else {
    const localKey = getVersionKey(key)
    local.setItem(localKey, JSON.stringify(val))
  }
}

export function getLocal(key, isRemove, noVersion) {
  if (!key) return
  const localKey = noVersion ? key : getVersionKey(key)
  const res = JSON.parse(local.getItem(localKey))
  if (isRemove) local.removeItem(localKey)
  return res
}

export function setSession(key, val, noVersion) {
  if (!key) return
  if (noVersion) session.setItem(key, JSON.stringify(val))
  else {
    const sessionKey = noVersion ? key : getVersionKey(key)
    session.setItem(sessionKey, JSON.stringify(val))
  }
}

export function getSession(key, isRemove, noVersion) {
  if (!key) return
  const sessionKey = noVersion ? key : getVersionKey(key)
  const res = JSON.parse(session.getItem(sessionKey))
  if (isRemove) session.removeItem(sessionKey)
  return res
}
