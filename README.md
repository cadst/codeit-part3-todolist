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

11/3(월) 피드백

개별

- [x] item(todo) 배열 -> 객체 형태로 변경
- [x] JSON.parse, stringify try ... catch 예외 처리
- [x] tagName -> name으로 setTitle, setDescription

공통

- [x] 새로 todoList 만들때 불변성이 깨지지 않게 하기
- [x] mode=INVALID 일때 에러 처리
- [x] NotFoundPage, ErrorPage 구분하기

스터디

- [x] <button>{children}</button>에서 children은 리액트노드 타입으로 어떤 데이터를 표현할 수 있을까?

```js
type ReactNode =
  | ReactElement
  | string
  | number
  | boolean
  | null
  | undefined
  | ReactNode[];
```

~11/11(화) 과제

- [x] IntersectionObserver 클래스를 이용한 무한스크롤 구현
- [x] useIntersectionObser 공통 훅 구현
