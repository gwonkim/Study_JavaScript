<template>
  <div id="app">
    <h1>페이지</h1>
          <router-link to="/page">페이지</router-link><br/>
      <router-link to="/gugudan">구구단</router-link><br/>
      <router-link to="/clickBox">클릭박스1초</router-link><br/>
      <router-link to="/radioColorBox">라디오박스</router-link><br/>
      <br />
      
    <div class="menu">
      <router-link to="/">홈</router-link>
      <router-link to="/page">페이지</router-link>
      <router-link to="/gugudan">구구단</router-link>
      <router-link to="/clickBox">클릭박스1초</router-link>
      <router-link to="/radioColorBox">라디오박스</router-link>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import VueRouter from 'vue-router'
import Home from './Home.vue'
import Page from './Page.vue'
import Gugudan from './Gugudan.vue'
import ClickBox from './ClickBox.vue'
import RadioColorBox from './RadioColorBox.vue'

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
/*     { path: '/notice', component: Notice },
    { path: '/todo', component: Todo }, */
    { path: '/page', component: Page },
    { path: '/gugudan', component: Gugudan },
    { path: '/clickBox', component: ClickBox },
    { path: '/radioColorBox', component: RadioColorBox },
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
