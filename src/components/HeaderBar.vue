<template>
  <div class="HeaderBody">
    <b-navbar class="navbar" toggleable="lg" type="dark" variant="dark" fixed="top" :sticky="sticky">
      <b-navbar-brand tag="h1" to="/">智股</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">首页</b-nav-item>
          <b-nav-item to="/info">快讯</b-nav-item>
          <b-nav-item href="#">市场数据</b-nav-item>
          <b-nav-item href="#">模型分析</b-nav-item>
          <b-nav-item href="#">论坛</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="搜索..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
          </b-nav-form>
          <b-navbar-nav>
            <b-nav-item to="/login">登陆</b-nav-item>
            <b-nav-item to="/register">注册</b-nav-item>
          </b-navbar-nav>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sticky: true,
    }
  }
}
</script>

<style>
/* .navbar {
  padding: 0.5rem 8rem;
} */
.HeaderBody {
  background-color: #f7f7f7;
  height: 1200px;
}
</style>