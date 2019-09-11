<template>
  <el-container class="layout-container">
    <el-aside class="layout-aside" :width="asideWidth">
      <p class="aside-logo">LOGO</p>
      <my-aside :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header class="layout-header">
        <my-header :isCollapse="isCollapse" @menu-toggle="menuToggle"/>
      </el-header>
      <el-main class="layout-main">
        <el-scrollbar class="layout-main-scrollbar">
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from '../Aside/aside'
import myHeader from '../Header/header'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  computed: {
    asideWidth () {
      const { isCollapse } = this
      return isCollapse ? '65px' : '215px'
    }
  },
  methods: {
    menuToggle () {
      const { isCollapse } = this
      this.isCollapse = !isCollapse
    }
  },
  components: {
    myAside, myHeader
  }
}
</script>

<style lang="scss" scoped>
</style>
