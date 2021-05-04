<template>
  <div id="app">
    <TypeList :types="types"> </TypeList>

  </div>
</template>

<script>
import TypeList from './components/TypeList'
import {getTypes} from './api/typelist.js'

export default {
  name: 'App',
  components: {
    TypeList,
  },
  
  data() {
    return {  
      title: 'this is a title',
      types: [],
      input_type : ''    
      }
  },
  async created(){
    const type = await getTypes()
    this.types = type

    // 批量初始赋值price属性
    this.batchUpdate()
  },
};

</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* 自定义图标的样式，在网站上下载至本地，打开demo_index.html可以找到symbol代码自定义的样式 */
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
