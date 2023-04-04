# vue_blog
vue로 blog 만들면서 router 개념 익히기

뷰로 blog 만들기

1. vue에서 부트스트랩 설치

1) cdn link 사용하기
2) npm 설치
5버전: npm install bootstrap@5.3.0-alpha3
(부트스트랩 홈페이지에서 downloads 탭에 있는 명령어를 입력)
4버전: npm install bootstrap jquery popper.js

main.js => 4버전 5버전 모두
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css


2. vue-router 설치.
npm install vue-router@4 
(vue3와 호환)

(1)라우터 세팅 (main.js)
import routermade from './router.js'

createApp(App).use(routermade).mount('#app')


(2)src에 router.js 만들고 작성

import blogList from './components/List.vue';

import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/list",
    component: blogList,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 

(3) App.vue

<router-view></router-view>
라우터로 설정한 컴포넌트 보여주기: 보여주고 싶은 자리에 작성
경로로 접속하면 보이게 된다.

(4)props 전송
<router-view :blogData="blogData"></router-view>
똑같이 하면 된다.



** git pull 안되는 경우
https://gdtbgl93.tistory.com/63
참고


3. <router> 태그

- <rounter-view></router-view>
경로로 들어갔을 때 내용을 보이게 하는 태그
-<router-link></router-link>
<a>태그와 유사한 역할. 경로로 들어갈 수 있는 버튼역할.

4. 라우터로 상세페이지 여러 개 만들기
{
        path:"/detail/:id(아무문자)",
        component: blogDetail,
    }

-url 값을 데이터로 가져오기: $route
$route.params 파라미터 가져오기

-정규식
path:"/detail/:id(\\d+)" 숫자만 입력 가능하게
뷰라우터4 홈페이지 참고.

404 페이지도 만들 수 있다!!!


<template>
    {{$route.params.id}}
    <h2>상세페이지입니다.</h2>
    <div>
        <h4>{{blogData[$route.params.id].title}} </h4>
        <h4>{{blogData[$route.params.id].content}}</h4>
    </div>
</template>



5. 상세페이지에서 또 상세페이지 나누기
{
        path:"/detail/:id",
        component: blogDetail,
        children: [
            {
                path: "/author",
                component: Author.vue,
            }
        ]
    }

똑같이 컴포넌트 등록해서 사용하면 된다!

6.
다른페이지로 이동 시
router-link 태그를 사용해도 되지만,

<h4 @click="$router.push(`/detail/${i}`)">{{blogData[i].title}}</h4>

$router.push 메소드를 사용해도 된다.

* $route.params.id 
:url 파라미더
* $route.fullPath
: 현재 경로관련 변수
$router.push()
라우터 경로로 이동
$router.go(1)
앞으로 가기
$router.go(-1)
뒤로 가기
