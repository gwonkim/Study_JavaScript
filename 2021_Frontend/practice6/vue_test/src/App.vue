<template>
  <div id="app">
    <h1>프론트엔드 시험공부</h1>
    <h3>페이지 - 0629시험문제</h3>
      <router-link to="/page1">페이지1</router-link><br/>
      <router-link to="/page2">페이지2</router-link><br/>
      <router-link to="/page3">페이지3</router-link><br/>
      <router-link to="/page4">페이지4</router-link><br/>
      <router-link to="/page5">페이지5</router-link><br/>
      <br />
      <router-link to="/노란녹색버튼">노란녹색버튼</router-link><br/>
      <router-link to="/반대_노란녹색버튼">반대_노란녹색버튼</router-link><br/>
      <router-link to="/현재시간추가">현재시간추가</router-link><br/>
      
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
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import Page3 from './Page3.vue'
import Page4 from './Page4.vue'
import Page5 from './Page5.vue'
import Gugudan from './Gugudan.vue'
import ClickBox from './ClickBox.vue'
import RadioColorBox from './RadioColorBox.vue'
import 노란녹색버튼 from './노란녹색버튼.vue'
import 반대_노란녹색버튼 from './반대_노란녹색버튼.vue'
import 현재시간추가 from './현재시간추가.vue'

var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
/*     { path: '/notice', component: Notice },
    { path: '/todo', component: Todo }, */
    { path: '/page', component: Page },
    { path: '/page1', component: Page1 },
    { path: '/page3', component: Page3 },
    { path: '/page2', component: Page2 },
    { path: '/page4', component: Page4 },
    { path: '/page5', component: Page5 },
    { path: '/gugudan', component: Gugudan },
    { path: '/clickBox', component: ClickBox },
    { path: '/radioColorBox', component: RadioColorBox },
    { path: '/노란녹색버튼', component: 노란녹색버튼 },
    { path: '/반대_노란녹색버튼', component: 반대_노란녹색버튼 },
    { path: '/현재시간추가', component: 현재시간추가 },
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
