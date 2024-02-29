import { Fragment } from "react";

export const FoodEx = ({ foodMenus }) => {
  console.log(foodMenus);

  return (
    <div>
      {/* <h2>{foodMenus[0].week}</h2>
      <p>아침메뉴: {foodMenus[0].breakfast}</p>
      <p>점심메뉴: {foodMenus[0].lunch}</p>
      <p>저녁메뉴: {foodMenus[0].dinner}</p>

      <h2>{foodMenus[1].week}</h2>
      <p>아침메뉴: {foodMenus[1].breakfast}</p>
      <p>점심메뉴: {foodMenus[1].lunch}</p>
      <p>저녁메뉴: {foodMenus[1].dinner}</p>

      <h2>{foodMenus[2].week}</h2>
      <p>아침메뉴: {foodMenus[2].breakfast}</p>
      <p>점심메뉴: {foodMenus[2].lunch}</p>
      <p>저녁메뉴: {foodMenus[2].dinner}</p> */}

      {/* {foodMenus.map((a) => console.log(a))} */}

      {foodMenus.map((menu) => (
        <Fragment key={menu.id}>
          <h2>{menu.week}</h2>
          <p>아침메뉴:{menu.breakfast}</p>
          <p>점심메뉴: {menu.lunch}</p>
          <p>저녁메뉴: {menu.dinner}</p>
        </Fragment>
      ))}
    </div>
  );
};
