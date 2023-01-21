![Game-ee 소개 (#3)](https://user-images.githubusercontent.com/49177223/183588570-c0d19196-124f-4e5d-b18c-ffc34903d3c5.png)

> GAME-EE :  종합 게임 플랫폼을 꿈꾼다.


<br/>

## 📝 요약

👥  **팀 구성:** 프론트엔드 3명 / 백엔드 2명

🙋🏻‍♀️  **팀 내 역할:** FE

📅  **기간**: 2022.04 ~ 2022.06 (6주)

⌨️  **사용 기술 스택:**   `Next.js` `Typescript` `emotion.js` `recoil` 

✨  **구현 기능**

- 기억력 게임 : 화면에 깜박거리는 순서를 기억하여 똑같이 클릭하는 게임
- 공룡 달리기 게임 : 크롬 공룡게임과 같이 공룡이 달리면서 장해물을 피하는 게임
- 다른 색깔 찾기 게임 :  화면에 같은 색상중 다른 하나를 찾아내는 게임
- 로그인 : 소셜 로그인을 이용, 로그인을 하면 개인점수 기록이 가능
- 랭킹 : 각각의 게임 마다 전체 사용자의 점수 랭킹을 표시

<br/>

## 🔥 구성원
|![구성원 소개(#2)-1](https://user-images.githubusercontent.com/49177223/183588531-0a131bd0-5b06-4dc4-a8d6-1f3a99a16488.png)  |  ![구성원 소개(#2)](https://user-images.githubusercontent.com/49177223/183588551-836729f1-966b-427d-99d6-924d8ba47a42.png)|
|--|--|
 

<br/>

## 📌 소프트웨어 아키텍쳐
### Communication

- discord / Notion

### Version

- Github / Git

### Common

- `TypeScript`
    - 예상치 못한 타입이 들어가서 에러가 나는 것을 코드 단위에서 파악할 수 있게 합니다. 자신이 개발하지 않은 함수나, 객체에 대한 타입 힌트를 얻을 수 있어서 협업에 용이합니다.
- `Eslint` & `Prettier` (linter & formatter)
    - lint는 협업시에 일정한 컨벤션을 맞출 수 있습니다.
    - formatter는 깔끔한 코드를 작성할 수 있습니다.

### Frontend

- `React`
    - 리액트는 컴포넌트 단위 개발로 협업을 쉽게 합니다. JSX로 컴포넌트 구조를 쉽게 알 수 있습니다.
- `Next.js` (SEO)
    - 게임 플랫폼을 만들기 위해서 검색 노출이 필요합니다. 메인 페이지를 SSR로 개발해서, 검색 엔진에 노출되도록 하기위해 `NextJS`를 사용합니다. 또한 SSG, CSR 또한 지원하기 때문에 유동성있게 사용할 수 있습니다.
- `emotion` (CSS in JS)
    - 왜 CSS - in - JS를 써야할까요?
        - JS 협업 효율? 개발자 경험이 좋아진다.
        - 클래스 이름을 생각 안해도 된다.
        - 성능보다 개발자 경험(개발 효율성, 컴포넌트 위주의 프로젝트)여서 CSS-in-JS를 사용했다.
- `recoil` (state)
    - 전역 상태 관리를 위해서 사용했습니다.
    - API fetch가 많은 프로젝트가 아니므로, redux와 같은 러닝커브가 높은 라이브러리는 개발에 많은 리소스가 들어갈 것이라고 생각했습니다.
    - recoil은 redux보다 훨씬 적은 양의 코드로 상태 관리를 할 수 있습니다.

![image](https://user-images.githubusercontent.com/49177223/213868103-06c55a3d-02e0-4047-aa0c-6eda07a86f40.png)

<br/>

## 📁 폴더 구조

```
📦src
 ┣ 📂api // API 관련 로직
 ┣ 📂components // 컴포넌트들
 ┃ ┣ 📂SnakeGame // 뱀 게임 관련 컴포넌트
 ┣ 📂constants // 상수 관리
 ┣ 📂hooks // 커스텀 훅
 ┣ 📂pages // 페이지들
 ┃ ┣ 📂game // 게임 페이지
 ┣ 📂services // 서비스 로직
 ┣ 📂styles
 ┃ ┣ 📜colors.ts // 색 관련 상수
 ┃ ┗ 📜theme.ts // 테마
 ┣ 📂types // 타입
 ┗ 📂utils // 유틸 함수
```
<br/>

## ✨ 프로젝트를 하면서 목표했던 것

![프론트엔드 소개 (#4)](https://user-images.githubusercontent.com/49177223/183588563-7e4c7a85-0acd-4ce7-a73e-3054609083e7.png)
![Backend 협업 방식 및 목표(#5)](https://user-images.githubusercontent.com/49177223/183588568-0dc2e102-0fc0-407f-8d53-589daa76c6a8.png)
![Team 협업 방식 및 목표](https://user-images.githubusercontent.com/49177223/183588574-6987c269-9124-4a7f-b636-63bfbe640d41.png)

