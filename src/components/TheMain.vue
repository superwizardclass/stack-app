<template>
    <main>
        <router-view></router-view>
    </main>
</template>



<script>
export default {
    data() {
        return {
            message: 'THIS IS MAIN'
        }
    }
}
</script>

<style scoped>
    main {
        background-color: rgb(13, 255, 174);
    }
</style>