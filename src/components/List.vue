<template>
    <div v-for="(log, i) in blogData" :key= "log">
        <h4>{{blogData[i].title}}</h4>
        <p>{{blogData[i].date}}</p>
    </div>
</template>

<script>
export default {
    name: 'blogList',
    props: {
        blogData: Array,
    }

}
</script>

<style>

</style>