const arr = [1, 2, 3, 4, 5];

export const MapEx = () => {
  //   arr.map((a) => console.log(a + "❤"));
  return (
    <div>
      {arr.map((a) => (
        <h2 key={a}>{a * 2}</h2>
      ))}
      {/* *맵함수
      =>배열의 요소를 가져와 값을 변환하여 반환함
      =>맵함수를 사용하면 반드시 key값을 정의해야되며,
      key값은 고유값 즉 유니크 해야됨  */}
    </div>
  );
};
