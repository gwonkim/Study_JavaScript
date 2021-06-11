<template>
  <div id="app">
    <h1>router</h1>
    <div class="menu">
      <router-link to="/">홈</router-link>
      <router-link to="/notice">공지사항</router-link>
      <router-link to="/todo">할일</router-link>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Notice from './Notice.vue'
import Todo from './Todo.vue'

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/notice', component: Notice },
    { path: '/todo', component: Todo }
  ]
})

export default {
  name: 'App',
  router
}
</script>

<style scoped>
div#app { margin: 30px auto; max-width: 700px; min-height: 600px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
h1 {  background:linear-gradient(90deg, #def, #bcd); margin: 0; padding: 10px 30px; }
div.menu { background-color: #eee;  }
div.menu a { display: inline-block; padding: 15px 20px; font-size: 14pt;
  text-decoration: none; color: black; }
a.router-link-exact-active { background-color: #ddd; }
.view { padding: 30px; }
</style>
