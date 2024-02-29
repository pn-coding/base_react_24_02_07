import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 20px 250px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 26px;
  font-weight: 700;
  border-bottom: 1px solid #dbdbdb;
`;

export const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to="/">LOGO</Link>
      </h3>
    </SHeader>
  );
};
