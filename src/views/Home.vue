<template>
  <div>
    <router-view></router-view>
    <div id="nav">
      <router-link to="/">首页</router-link>|
      <router-link to="/discover">发现</router-link>|
      <router-link to="/order">订单</router-link>|
      <router-link to="/profiles">我的</router-link>|
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
