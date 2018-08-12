<template>
    <div class="container">
    <Header/>
    <Todo/>
    <Tabs/>
    <Footer :name='name'/>
    </div>
</template>

<script>
import  Header from './header.jsx';
import Footer from './footer.vue';
import Todo from './todo.vue';
import Tabs from './tabs.vue';
export default {
    components:{
        Header,
        Footer,
        Todo,
        Tabs
    },
    data(){
       return  {text:"这是一段红色的文字",name:"zhaochen"}
    }
}
</script>

<style lang="stylus" scoped>
.container {
    background-image: url('../assets/background.jpg');
}
</style>