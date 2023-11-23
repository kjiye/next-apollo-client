## Boilerplate for building application using Next.js and Apollo

> TypeScript, Next.js, Apollo Client, Tailwind CSS 환경의 클라이언트 애플리케이션을 위한 기본 설정용 보일러플레이트

## Environment  

- TypeScript 5
- Next.js 14
- React 18
- Apollo Client 3
- Tailwind CSS 3

## Getting Started

- Node.js 최소 버전 점검 : 18.17.0
  
- `.env.development` 파일 생성
  
  - `NEXT_PUBLIC_SERVER_URL` : GraphQL API 서버 주소 기재한다
 
- `npm install` 또는 `yarn install` : dependencies를 설치한다

- `npm run dev` 또는 `yarn dev` : 개발환경용 로컬 서버를 실행한다

- 브라우저를 통해 `localhost:3000`의 실행 상태를 점검한다

## Directory Structure  

<pre>
└── public : 정적 리소스 관리  
└── src  
  ├── apollo : GraphQL API 서버에 연결할 Apollo Client 객체 생성 및 초기화  
  ├── app : Next.js 파일 시스템 라우터, 서버 컴포넌트 관리
  ├── component : 인터페이스 공통 요소를 header, footer, button, view 등과 같은 속성 분류로 나누어서 관리 
  ├── util : 반복 사용 함수 관리  
  └── text.json : 앱 내에서 사용하는 하드코딩 텍스트를 관리, 다국어 데이터 관리
</pre>
