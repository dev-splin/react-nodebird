# [리뉴얼] React로 NodeBird SNS 만들기

인프런 조현영님의 [[리뉴얼] React로 NodeBird SNS 만들기](https://www.inflearn.com/course/%EB%85%B8%EB%93%9C%EB%B2%84%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%A6%AC%EB%89%B4%EC%96%BC/dashboard) 강좌를 보며 스터디한 프로젝트입니다.





## :hammer: 설치

1. [Node](https://nodejs.org/en/) : v16.7.0
2. 패키지 생성 : npm init :arrow_right: 패키지명 설정(저는 react-node bird-front로 하였습니다.)
3. Next.js(12버전) : npm i next@12
4. package.json 수정
   - author 입력
   - scripts
     - test :arrow_right: "dev": "next"
5. prop 타입 체크 설치(prop-types) : npm i prop-types
6. 코드 컨벤션 서포트 라이브러리 설치 : -D를 붙이면 개발용으로만 쓰임
   - npm i eslint -D
   - npm i eslint-plugin-import -D
   - npm i eslint-plugin-react -D
   - npm i eslint-plugin-react-hooks -D
   - npm i -D babel-eslint 
   - npm i -D eslint-config-airbnb
   - npm i -D eslint-plugin-import
   - npm i -D eslint-plugin-react-hooks
   - npm i -D eslint-plugin-jsx-a11y
   - eslint 설정은 아래를 참고
7. 디자인을 위한 css 프레임워크 설치
   - npm i antd
   - npm i @ant-design/compatible (antd 4버전과 5버전 호환을 도와줌, ex)없어진 컴포넌트 지원 등...)
   - npm i @ant-design/icons
   - npm i styled-components
8. 자동완성을 위한 라이브러리 설치
   - npm i @types/react
9. redux 설치
   - npm i react-redux
   - npm i redux
   - npm i next-redux-wrapper@6 (redux 작성을 도와주는 라이브러리)
   - npm i redux-devtools-extension (브라우저 개발자도구와 연동을 도와주는 라이브러리)
   - npm i redux-saga (redux에서 비동기 호출을 위한 라이브러리)
   - npm i immer (redux의 불변성을 편하게 사용할 수 있게 도와주는 라이브러리)
10. 이미지 캐러셀(이미지 슬라이더) : 유저가 스크롤을 내리지 않고도 볼 수 있는 정보의 양을 극대화하기 위한 기법
   - npm i react-slick
11. 비동기 라이브러리 설치 : npm i axios
12. 랜덤 id를 만들어 주는 라이브러리(더미데이터 용) : npm i shortid
13. 더미데이터를 만들어주는 라이브러리 : npm i @faker-js/faker
14. 인스타 피드 처럼 데이터가 많은 경우 데이터 가상화 처리 : npm i react-virtualized
    - 화면에 보이는 데이터를 제외한 나머지 데이터들을 메모리에 가지고 있으므로써, 브라우저 메모리 오버플로우를 방지함



### eslint 설정 (.eslintrc)

```yaml
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": [
    "import",
    "react-hooks"
  ],
  "rules": {

  }
}
```

