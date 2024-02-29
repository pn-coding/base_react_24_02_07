import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: #1d1d1d;
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
  }
`;

const Gnb = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 150px;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to={"/"}>LOGO</Link>
      </h3>

      <Gnb>
        <li>
          <Link to={"/sub/0"}>메뉴1</Link>
        </li>
        <li>
          <Link to={"/sub/1"}>메뉴2</Link>
        </li>
      </Gnb>
    </SHeader>
  );
};

export default Header;
