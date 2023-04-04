<template>
    {{$route.params.id}}
    <h2>상세페이지입니다.</h2>
    <div>
        <h4>{{blogData[$route.params.id].title}} </h4>
        <h4>{{blogData[$route.params.id].content}}</h4>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'blogDetail',
    props:{
        blogData: Array,
    }
}
</script>

<style>

</style>