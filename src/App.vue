<template>
  <!-- 네비게이션 -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueStudy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
<!-- title -->
  
  <router-link to="/">홈 페이지</router-link>
  <router-link to="/list">리스트 페이지</router-link>

  <router-view :blogData="blogData"></router-view>
<!-- card -->
  <!-- <blogList :blogData="blogData"></blogList> -->
</template>


<script>

// import blogList from './components/List.vue';

export default {
  name: 'App',
  data(){
    return{
      blogData: [
          { 
            title : '첫 째 프로젝트 : 허위매물 전문 부동산 앱',
            content : 'Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다',
            date : 'April 3, 2023',
            number : 0
          },{ 
            title : '둘 째 프로젝트 : 오마카세 배달 앱',
            content : '음식이 아니라 셰프를 직접 배달해드립니다',
            date : 'October 20, 2022',
            number : 1
          },{ 
            title : '셋 째 프로젝트 : 현피 앱',
            content : '거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요',
            date : 'April 24, 2019',
            number : 2
          }
        ]
    }
  },
  components: {
    // blogList: blogList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
