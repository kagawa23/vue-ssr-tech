<template>
    <section class="main">
        <input 
        type="text"
        class="todo-input"
        placeholder="接下来要去做什么?"
        />
        <div v-for="item in todos" :key="item.content">
            <Item :todo="item"/>
        </div>
    </section>
</template>

<script>
import Item from './item.vue';
export default {
    components:{
        Item
    },
    data(){
        return {
            todos:[{
                content:"asdasdasd",
                complete:false
            },{
                content:"asfffsd",
                complete:true
            }]
        }
    }
}
</script>

<style lang="stylus">
</style>
