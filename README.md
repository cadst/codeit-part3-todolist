# Todolist

~10/29(수) 과제

- 메인 페이지(http://localhost:5173/)에서 Todo 수정, 생성 버튼을 클릭했을 때 http://localhost:5173/edit?mode={mode} 로 이동되어야하고, 현재 보고 있는 URL을 그대로 복사해서 공유했을 때도 같은 mode의 페이지가 보여야 함.
- 생성페이지(/edit?mode=create), Todo 제목과 내용을 입력받아서 localStorage에 저장.

10/29(수) 피드백

- [x] Header 컴포넌트 분리
- [x] EditForm 컴포넌트 분리
- [x] 라우터 모드 declarative -> data 변경
- [x] 잘못된 경로 404 처리
- [ ] useMemo, useCallBack 사용방법 공부하여 리렌더 최적화시키기
- [x] localStorage 객체로 바꾸기

~11/3(월) 과제

- 생성(/edit?mode=create), 수정(/edit?mode=update) 기능 완성
  목록 페이지(/) 의 Todo List의 개별 Item에서
  > > [수정] 버튼 클릭 시, /edit?mode=update로 이동, 그리고 해당 수정 페이지에서 Todo Item의 정보 그대로 출력
  > > [삭제] 버튼 클릭 시, LocalStorage에서 해당 Item 정보를 뺀 나머지 정보를 저장.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
