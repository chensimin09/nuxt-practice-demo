import Vue from 'vue'
import { setLocal, getLocal, setSession, getSession } from './utils/storage'

const vm = new Vue({})

vm.prototype.specialLocal = 'test01'

vm.prototype.setLocal = setLocal
vm.prototype.getLocal = getLocal
vm.prototype.setSession = setSession
vm.prototype.getSession = getSession
