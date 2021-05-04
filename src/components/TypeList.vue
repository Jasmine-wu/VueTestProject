<template>
 <!-- 加根节点 -->
    <div>
        <!-- 条件渲染 -->
        <!-- v-if 和 v-for 不要放在一个标签上他们有优先级的不同 -->
        <p v-if = "types.length ===0">
            没人任何type信息
        </p>        
        <!-- 列表渲染 -->
        <!-- <div v-for="type in types" :key="type"  :class="{active: selectedType === type}" @click="selectedType = type">
            {{ type }}
        </div> -->
        <div class="type list" v-else>
            <transition-group name="fade">
                <div v-for="type in types" :key="type.name" :style="{backgroundColor: (selectedType === type ? '#ddd' : 'transparent')}" @click="selectedType = type">
                    {{ type.name }} - {{type.price | curentcy('$$$') }}
                </div>
            </transition-group>
        </div>
    </div>   

</template>

<script>
    export default {
          // 组件化类型列表

            data() {
                return {
                    selectedType: '',
                }
            },
            // 属性定义的两种方法
            // props : ["types"],
            // 推荐第二种，方便属性校验
            props: {
                types:{
                    type: Array,
                    // 'types' prop must be a function
                    default: function(){
                        return []
                    }
                }
            },

            // 定义一个局部的过滤器
            // symbol='$' 默认值
            filters: {
                curentcy: function(value, symbol='$') {
                    return symbol + value;
                }
            }        
    }
</script>

<style scoped>

/* 局部样式 */
    .active {
        background-color: #ddd;
    }
</style>