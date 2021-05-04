<template>
  <div id="app">
    <TypeList :types="types"> </TypeList>

   <TypeAdd v-model.number="input_type" @input="input_type=$event" @add-type="addType"> </TypeAdd>


  </div>
</template>

<script>
import TypeList from './components/TypeList'
import {getTypes} from './api/typelist.js'
import TypeAdd from './components/TypeAdd'

export default {
  name: 'App',
  components: {
    TypeList,
    TypeAdd,
  },
  
  data() {
    return {  
      title: 'this is a title',
      types: [],
      input_type : ''    
      }
  },
  methods: {
    addType() {
        //, 添加type到types
        if(this.input_type) {
            this.types.push({name:this.input_type})
            this.input_type = ''
            // this.$refs.msgSuccess.toggle()
        }else {
            // this.$refs.msgWarn.toggle()
        }
    },
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
