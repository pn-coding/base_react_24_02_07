import { useState } from "react";

export const EventEx02 = () => {
  const [num, setNum] = useState(0);
  //   =>리액트 상태관리 hook
  //   =>배열 비구조화 할당을 통하여 사용 하며 반드시 import해 와야됨
  //   =>const [변수명, set변수명] = useState(초기화 할 값);
  console.log(num);

  //   const plusHandler = () => {
  //     setNum(num + 1);
  //     // =>useState에 정의된 num의 변수의 값을 변경하고 싶을때 사용함
  //     // =>set변수명(변경할내용)
  //   };

  //   const minusHaldner = () => {
  //     setNum(num - 1);
  //   };

  //   const plusHandler = () => setNum(num + 1);
  //   const minusHaldner = () => setNum(num - 1);

  return (
    <div>
      <h3>클릭할때 숫자 증가</h3>
      <p>{num}</p>
      {/* <button onClick={plusHandler}>+</button>
      <button onClick={minusHaldner}>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};
