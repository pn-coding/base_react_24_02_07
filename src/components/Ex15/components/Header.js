import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;

  h3 {
    font-size: 26px;
    font-weight: 700;
  }

  a {
    color: #1d1d1d;
  }
`;

const Gnb = styled.ul`
  display: flex;
  li {
    margin-left: 50px;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to={"/"}>LOGO</Link>
      </h3>

      <Gnb>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      </Gnb>
    </SHeader>
  );
};
