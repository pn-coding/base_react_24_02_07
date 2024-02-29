import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME_BG_URLS } from "../constant/urls";
import { globalSpace } from "../../../GlobalStyles";

const MainBanner = styled.section`
  height: 800px;
  background: url(${HOME_BG_URLS.mainBanner}) no-repeat center / cover;
`;

const Section = styled.section`
  padding: ${globalSpace.section};
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 500px;
  background-color: lightgray;
  /* box-shadow: x y blur spread color; */
  box-shadow: 20px 20px 20px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translate(20px, 20px);
  }
`;

export const Home = () => {
  return (
    <div>
      <MainBanner />

      <Section>
        <Con>
          <Link to={"/sub/0"}>
            <img src={HOME_BG_URLS.con_1} alt="" />
          </Link>
        </Con>

        <Con>
          <Link to={"/sub/1"}>
            <img src={HOME_BG_URLS.con_2} alt="" />
          </Link>
        </Con>
      </Section>
    </div>
  );
};
