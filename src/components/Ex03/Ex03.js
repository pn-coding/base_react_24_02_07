import { FoodEx } from "./FoodEx";
import { MapEx } from "./MapEx";
import { Quiz01 } from "./Quiz01";

const menus = [
  {
    id: 0,
    week: "월요일",
    breakfast: "시리얼",
    lunch: "김밥",
    dinner: "치킨",
  },
  {
    id: 1,
    week: "화요일",
    breakfast: "샐러드",
    lunch: "떡볶이",
    dinner: "돼지국밥",
  },
  {
    id: 2,
    week: "수요일",
    breakfast: "소고기국밥",
    lunch: "김치찜",
    dinner: "피자",
  },
];

export const Ex03 = () => {
  return (
    <div>
      {/* <FoodEx foodMenus={menus} />
      <MapEx /> */}
      <Quiz01 />
    </div>
  );
};
