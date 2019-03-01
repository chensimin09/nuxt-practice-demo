import Vue from 'vue'
import * as storage from '@/utils/storage'

Vue.prototype.$setLocal = storage.setLocal
Vue.prototype.$getLocal = storage.getLocal
Vue.prototype.$getSession = storage.getSession
Vue.prototype.$setSession = storage.setSession
