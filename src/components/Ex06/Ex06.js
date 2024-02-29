import { Header } from "./components/Header";
import { TitleWrap } from "./components/TitleWrap";
import { ProgessWrap } from "./components/ProgessWrap";
import { PlayBtns } from "./components/PlayBtns";
import { UserArea } from "./components/UserArea";
import styled from "styled-components";
import { CoverUrl } from "./ImgUrl";

const Wrap = styled.div`
  height: 100vh;
  background-color: #808080;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 385px;
  width: 100%;
  height: 800px;
  background-color: #1d1d1d;
  border-radius: 20px;
  padding: 35px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverBg = styled.div`
  width: 85%;
  height: 280px;
  border-radius: 30px;
  margin: 40px 0 30px 0;
  background-color: lightgray;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Ex06 = () => {
  return (
    <Wrap>
      <Container>
        <Header />

        <CoverBg>
          <img src={CoverUrl} alt="cover img" />
        </CoverBg>

        <TitleWrap />

        <ProgessWrap />

        <PlayBtns />

        <UserArea />
      </Container>
    </Wrap>
  );
};
