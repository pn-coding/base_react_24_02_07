export const Menus = ({ breakfast, day, lunch, dinner }) => {
  //   const lunch = props.lunch;
  //   const dinner = props.dinner;
  //   console.log(lunch, dinner);
  //   const { lunch, dinner } = props;
  //   =>객체 비구조화 할당 또는 구조 분해 할당

  return (
    <>
      <h3>2월 {day}일 메뉴 </h3>
      <h4>아침메뉴: {breakfast}</h4>
      <h4>점심메뉴: {lunch}</h4>
      <h4>저녁메뉴: {dinner}</h4>
    </>
  );
};
