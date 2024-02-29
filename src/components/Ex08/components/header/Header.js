import { faBars, faClose, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: teal;
  width: 100%;
`;

const Logo = styled.div`
  width: 190px;
  height: 55px;
  overflow: hidden;
`;

const Gnb = styled.ul`
  display: flex;
  align-items: center;
  color: white;
  li {
    margin-right: 80px;
  }
  li:last-child {
    margin-right: 0;
  }

  font-size: 20px;
  font-weight: 700;
`;

const SideMenu = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 30px;
  }
  font-size: 24px;
  color: white;
`;

const Lan = styled.div`
  font-size: 16px;
`;

const Search = styled.div``;

const MenuBtn = styled.div``;

const SlideMenu = styled.div`
  width: 60%;
  height: 100vh;
  background-color: lightgray;
  position: absolute;
  top: 0;
  right: ${(props) => props.$isMoved};
  padding: 60px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  transition: 0.5s;
`;

const Close = styled.div``;

export const Header = () => {
  const [move, setMove] = useState("-100%");

  return (
    <SHeader>
      <Logo>
        <img
          src="https://gggs.kaist.ac.kr/html/images/common/logo.svg"
          alt="LOGO"
        />
      </Logo>
      <Gnb>
        <li>대학원 소개</li>
        <li>구성원</li>
        <li>입학</li>
        <li>교육</li>
        <li>연구</li>
        <li>커뮤니티</li>
      </Gnb>

      <SideMenu>
        <Lan>KOR</Lan>
        <Search>
          <FontAwesomeIcon icon={faSearch} />
        </Search>
        <MenuBtn onClick={() => setMove("0%")}>
          <FontAwesomeIcon icon={faBars} />
        </MenuBtn>
      </SideMenu>

      <SlideMenu $isMoved={move}>
        <Close>
          <FontAwesomeIcon icon={faClose} />
        </Close>
      </SlideMenu>
    </SHeader>
  );
};
