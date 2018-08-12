<template>
    <div :class="todo.complete?'complete':'incomplete'">
        {{ todo.content }}
        {{ todo.complete }}
    </div>
</template>

<script>
export default {
    props:{
        todo: {
            type:Object,
            required:true,
        }
    }
}
</script>

<style lang="stylus" scoped>
.complete {
    color: red;
}

.incomplete {
    color: blue;
}
</style>