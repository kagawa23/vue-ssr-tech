<template>
    <div class="helper">
        <span class="left">2 items left</span>
        <span class="tabs">
            <span
                v-for="state in states"
                :key="state"
                :class="[state, filter ===state? 'hightlight':'none']"
                @click="toggleFilter(state)"
            >{{state}}</span>
        </span>
        <span>clear complete</span>
    </div>
</template>

<script>
export default {

    data(){
        return {
            states:["all","active","complete"],
            filter:"all",
        }
    },
    medthods(){
    const helloWorld = () => {
        console.log(`moment : ${moment()}`);
         console.log(`moment : ${moment()}`);
         console.log(`moment : ${moment()}`);
        };
    }
}
</script>

<style lang="stylus" scoped>
</style>

