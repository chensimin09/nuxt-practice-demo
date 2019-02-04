<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">
        菜单
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['0']">
        <a-menu-item key="0">
          <nuxt-link to="/home">
            <a-icon type="user" />
            <span>首页</span>
          </nuxt-link>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="laptop" />
            <span>
              列表管理
            </span>
          </span>
          <a-menu-item key="11">
            <nuxt-link to="/listManage/ListOption1">
              <span>列表页面1</span>
            </nuxt-link>
          </a-menu-item>
          <a-menu-item key="12">
            列表页面2
          </a-menu-item>
          <a-menu-item key="13">
            列表页面3
          </a-menu-item>
          <a-menu-item key="14">
            列表页面4
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex; align-items: center">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div style="margin-left: auto; margin-right: 30px" @click="() => show = !show">
          <span>
            simin.chen
          </span>
          <ul v-show="show" style="display: inline-block; margin-bottom: unset">
            <li>
              <a @click="logout()">
                <i class="fa fa-power-off">
                  退出系统
                </i>
              </a>
            </li>
          </ul>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '18px 14px', padding: '16px', background: '#fff', minHeight: '780px' }">
        <nuxt />
      </a-layout-content>
      <a-layout-footer style="text-align: center; padding: 16px; margin-bottom: 5px; background-color: white">
        nuxt-practice-demo ©2019 Created by simin.chen
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  line-height: 32px;
  text-align: center;
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      collapsed: false,
      show: false
    }
  },
  methods: {
    logout: () => console.log('登出了！')
  }
}
</script>
