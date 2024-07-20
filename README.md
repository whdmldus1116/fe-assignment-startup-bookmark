# 🦄 프론트엔드 개발자 사전 과제

#### Contributors

| <img src="https://github.com/whdmldus1116.png?size=70" alt="lily.jo" width="70"/><br>[조의연 <br/> (lily.jo)](https://github.com/whdmldus1116) | <img src="https://github.com/yoouung.png?size=70" alt="jamie.park" width="70"/><br>[박재영 <br/> (jamie.park)](https://github.com/yoouung) |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------: |

<br/>

**[🔗 배포 링크 바로가기](https://lilyjamie.netlify.app)**

**로컬에서 실행하기**

```sh
yarn install
yarn dev
```

---

<br />

### ⚙️ 사용한 라이브러리

- `react` ![Yarn](https://img.shields.io/badge/yarn-v18.2.0-blue)
  - React 라이브러리입니다.

- `axios` ![Yarn](https://img.shields.io/badge/yarn-v1.7.2-blue)
  - API 호출을 위해 사용했습니다.
    
- `react-responsive` ![Yarn](https://img.shields.io/badge/yarn-v10.0.0-blue)
  - 반응형 디자인을 위해 사용했습니다.
    
- `react-router-dom` ![Yarn](https://img.shields.io/badge/yarn-v6.25.1-blue)
  - 라우팅을 위해 사용했습니다.
    
- `styled-components` ![Yarn](https://img.shields.io/badge/yarn-v6.1.12-blue)
  - 글로벌 스타일 및 컴포넌트 스타일링을 위해 사용했습니다.
    
- `react-intersection-observer` ![Yarn](https://img.shields.io/badge/yarn-v9.13.0-blue)
  - 무한 스크롤을 구현하기 위해 사용했습니다.
    
- `react-query` ![Yarn](https://img.shields.io/badge/yarn-v3.39.3-blue)
  - 서버 상태 관리를 위해 사용했습니다.

<br/>

### 💡 특별히 신경 쓴 부분

**1. 모바일 환경 최적화**

- 반응형 디자인을 위해 react-responsive 라이브러리 사용했습니다.
- 로그인하지 않은 상태에서의 헤더 내부 요소를 `메뉴 아이콘`에서 `로그인해주세요` 텍스트로 변경했습니다.
- `useEffect`를 사용하여 로그인 상태를 체크하고, 로그인하지 않은 경우 헤더 텍스트를 동적으로 변경하였습니다.

**2. 비밀번호 안전도 체크**

- 비밀번호 안전도가 `높음`, `보통`, `낮음` 중 `낮음`일 경우 회원가입 버튼 비활성화 처리했습니다.

**3. 사용자 경험 개선**

- 회원가입 후 스타트업 리스트 페이지가 아닌 로그인 페이지로 이동하도록 변경하여, 사용자 흐름을 자연스럽게 유지하였습니다.
  - 회원가입 후 `navigate('/login')`을 사용하여 로그인 페이지로 리디렉션 되도록 수정했습니다.
- 로그인 상태에 따른 헤더 텍스트 변경으로 사용자에게 명확한 정보를 제공하였습니다.
- 로그아웃에 관한 가이드가 없어서 menu목록에 임의대로 로그아웃 버튼을 추가하였습니다.

**4. Mock API 수정**

- 로그인 한 사용자 정보를 관리하고, 각 페이지 렌더링 시 로그인 여부를 확인하기 위한 방법이 필요했습니다.
- `/api/login` API를 수정하여 사용자 정보를 응답에 포함시켰습니다. 클라이언트 서버가 이를 로컬 저장소에 저장하고 각 페이지 렌더링 시 로그인한 사용자 정보를 관리했습니다.

<br/>

### 🛠️ 트러블 슈팅

**1. 스타트업 썸네일 이미지 주소 문제:**

- **문제**: 잘못된 이미지 주소 도메인으로 이미지가 렌더링되지 않았습니다.
- **해결**: 이미지 주소 도메인을 `i.picsum.photos`에서 `picsum.photos`로 수정하여 렌더링되도록 수정했습니다.

**2. Netlify 무중단 배포:**

- **문제**: 새로고침 시 page not found 404 error가 발생했습니다.
- **해결**: `netlify.toml` 및 `\_redirects` 설정을 통해 문제 해결했습니다.

<br/>

### 🚧 애로사항

**1. 각 컴포넌트 크기 조정**

- 다양한 화면 크기에서 일관된 사용자 경험을 제공하기 위해 각 컴포넌트의 크기를 조정했습니다.

<br/>

### 🖍️ 테스트코드

Jest를 사용하여 주요 기능에 대한 테스트 코드를 작성했습니다.

<br/>
