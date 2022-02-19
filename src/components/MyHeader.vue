<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl normal-case">TOP开发者社区</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/tool">工具</router-link></li>
        <li><router-link to="/blog">博客</router-link></li>
        <li><router-link to="/book">电子书</router-link></li>
        <li><router-link to="/video">视频</router-link></li>
        <li><router-link to="/project">项目</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
      </ul>
    </div>
  </div>
</template>
