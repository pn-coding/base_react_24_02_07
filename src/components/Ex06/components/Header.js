import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:nth-child(2) {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
  }
`;

const MenuBtn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1d1d1d;
`;

export const Header = () => {
  return (
    <SHeader>
      <MenuBtn>
        <FontAwesomeIcon icon={faChevronDown} />
      </MenuBtn>
      <MenuBtn>
        <FontAwesomeIcon icon={faBars} />
      </MenuBtn>
    </SHeader>
  );
};
