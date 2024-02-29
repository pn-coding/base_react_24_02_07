import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Ex09 = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub01" element={<Sub01 />} />
          <Route path="/sub02" element={<Sub02 />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

// *react-router-dom
// =>리액트 경로 설정
// =>Router -> Routes -> Route 순서
// =>Router는 종류가 2가지
// 1.HashRouter: /#/ 형식으로 사용됨
// 2.BrowserRouter: / 형식으로 사용됨
// 3.Route 프롭스 설정은
// path: 경로 지정
// element: 지정한 경로를 입력하면 보여줄 컴포넌트
// /*: 지정한 경로가 아닌 없는 경로 일때 -> 404 error
// /:변수명 으로 설정하면 경로에 변수를 지정할 수 있음
