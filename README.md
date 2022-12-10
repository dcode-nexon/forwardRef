# forwardRef

- 기본적으로 useRef로 가상돔 요소는 참조가 가능하지만 컴포넌트 자체는 참조불가
- 자식 컴포넌트 자체를 forwardRef를 통해 부모요소의 참조객체에 전달가능

# useImperativeHandle

- 자식 컴포넌트의 가상돔이 아닌 원하는 정보값을 객체형태로 부모컴포넌트에 전달가능
- 기본적으로 react는 부모에서 자식으로 값을 전달하는 단방향 데이터 바인딩이지만 forwardRef, useImperativeHandle을 통해 자식에서 만들어진 값을 역으로 부모에게 전달가능
- 예시 : 팝업컴포넌트의 정보값을 부모에 전달할때
