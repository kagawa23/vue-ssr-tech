<template>
    <div id="footer">
        written by {{name}}
    </div>
</template>

<script>
export default {
    props:['name'],
}
</script>

<style lang="stylus" scoped>
.footer {
    color: #808080;
}
</style>

