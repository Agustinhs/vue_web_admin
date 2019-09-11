<template>
  <div class="header-container">
    <div class="menu-toggle-icon">
      <i :class="toggleIconClass" @click="$emit('menu-toggle')"></i>
    </div>
    <div class="header-user">
      <el-dropdown placement="bottom" size="medium">
        <el-avatar size="large" src="static/images/user.jpg"></el-avatar>
        <el-dropdown-menu slot="dropdown" class="header-user-dropdown">
          <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button" class="user-dropdown-logout" @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    isCollapse: Boolean
  },
  computed: {
    toggleIconClass () {
      const { isCollapse } = this
      return isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  methods: {
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  .menu-toggle-icon {
    float: left;
    font-size: 24px;
    line-height: 60px;
    i {
      cursor: pointer;
    }
  }

  .header-user {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    .el-avatar {
      cursor: pointer;
    }
  }
}
</style>
