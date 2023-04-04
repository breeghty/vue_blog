<template>
    <div v-for="(log, i) in blogData" :key= "log">
        <!-- <router-link to='/detail'><h4>{{blogData[i].title}}</h4></router-link> -->
        <h4 @click="$router.push(`/detail/${i}`)">{{blogData[i].title}}</h4>
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