<template>
  <el-menu :default-active="defaultActive" unique-opened :collapse="isCollapse"  background-color="#495060" text-color="#fff">
    <el-menu-item index="1-1">
      <i class="el-icon-s-home"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">系统设置</span>
      </template>
      <el-menu-item index="1-1-1">用户管理</el-menu-item>
      <el-menu-item index="1-1-2">角色管理</el-menu-item>
      <el-menu-item index="1-1-3">菜单管理</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-s-platform"></i>
        <span slot="title">网页配置</span>
      </template>
      <el-menu-item index="2-1-1">新闻发布</el-menu-item>
      <el-menu-item index="2-1-2">关于我们</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '1-1'
    }
  },
  props: {
    isCollapse: Boolean
  },
  methods: {
  }
}
</script>
