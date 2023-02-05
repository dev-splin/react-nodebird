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
10. 이미지 캐러셀(이미지 슬라이더) : 유저가 스크롤을 내리지 않고도 볼 수 있는 정보의 양을 극대화하기 위한 기법
   - npm i react-slick
11. 비동기 라이브러리 설치 : npm i axios



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

