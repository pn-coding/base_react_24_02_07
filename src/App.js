import { Contents, Text } from "./components/Ex02/Contents";
// =>다중 내보내기를 썻을땐 {} 형식으로 감싸서 여러개 호출가능
import Footer from "./components/Ex02/Footer";
import Header from "./components/Ex02/Header";
import { Menus } from "./components/Ex02/Menus";
import { Ex03 } from "./components/Ex03/Ex03";
import { Ex04 } from "./components/Ex04/Ex04";
import { Ex05 } from "./components/Ex05/Ex05";
import { Ex06 } from "./components/Ex06/Ex06";
import { EventEx01 } from "./components/Ex07/EventEx01";
import { Ex07 } from "./components/Ex07/Ex07";
import { Home } from "./components/Ex08/Home";
import { Ex09 } from "./components/Ex09/Ex09";
import { Ex11 } from "./components/Ex11/Ex11";
import { Ex12 } from "./components/Ex12/Ex12";
import { Ex13 } from "./components/Ex13/Ex13";
import { Ex15 } from "./components/Ex15/Ex15";

const App = () => {
  return (
    <>
      {/* <Header />
      <Contents />
      <Text />
      <Footer /> */}

      {/* <Menus breakfast={"시리얼"} day={"8"} lunch="잡채" dinner="집밥" />
      <hr />
      <Menus breakfast={"시리얼"} day={"9"} lunch="죽" dinner="떡국" /> */}
      {/* 2일차 끝 */}

      {/* <Ex03 /> */}
      {/* 3일차 끝 */}

      {/* <Ex04 /> */}
      {/* 4일차 끝 */}

      {/* <Ex05 /> */}
      {/* 5일차 끝 */}

      {/* <Ex06 /> */}
      {/* 6일차 끝 */}

      {/* <EventEx01 /> */}
      {/* <Ex07 /> */}
      {/* 7일차 끝 */}

      {/* <Home />
      <testing /> */}
      {/* 8일차 끝 */}

      {/* <Ex09 /> */}
      {/* 9일차 끝 */}

      {/* <Ex11 /> */}
      {/* 11일차 끝 */}

      {/* <Ex12 /> */}
      {/* 12일차 끝 */}

      {/* <Ex13 /> */}
      {/* 13~14일 끝 */}

      <Ex15 />
    </>
  );
};

export default App;
// =>컴포넌트를 내보내기 할때 export를 사용하며,
// import는 불러오기할 때 사용

// *jsx
// =>리액트에서 사용가능한 문법이며, js 파일 내부에서
// html, css를 사용할수 있음
// =>엘리먼트를 각각 사용할순 없으며, 2개 이상일땐 반드시
// 부모 엘리먼트로 감싸줘야됨

// *fragment
// =><></>모양으로 사용하며 태그 명은 없지만
// 부모 태그 역할을 함

// *props
// =>매개 변수 역할이며 컴포넌트에서 사용하는 매개변수
