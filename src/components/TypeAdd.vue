<template>
    <div>
        <!-- 用户输入 -->
        <p>
            <!-- v-model 不加再次在input输入,输入不会写入到model imput_msg 里面-->
            <input type="text" :value="value" @input="onInput" v-on:keydown.enter='addType' v-focus>
            <!-- {{imput_msg}} -->
            <button @click = 'addType'> add </button>
        </p>
        </div>
</template>

<script>
    export default {
            props: ["value"],
            data() {
                return {
                    input_type: 'please input',
                }
            },

            methods: {
                addType() {
                    //, 派发⌚事件
                    //. addType 这里写addType不会生效
                    this.$emit("add-type") 
                },

                onInput(e) {
                    //, 派发⌚事件,返回value值
                    this.$emit('input', e.target.value) 
                },
            },

            // mounted () {
            //     this.$refs.inp.focus();
            // },        
    }
</script>

<style lang="scss" scoped>

</style>