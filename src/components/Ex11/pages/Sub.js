import styled from "styled-components";
import { HOME_BG_URLS } from "../constant/urls";
import { globalSpace } from "../../../GlobalStyles";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: ${globalSpace.section};
`;

const ImgWrap = styled.div`
  width: 48%;
  height: 550px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ConWrap = styled.div`
  width: 48%;
  h3 {
    font-size: 60px;
    font-weight: 700;
    margin: 70px 0 30px 0;
  }

  p {
    color: #808080;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const Sub = () => {
  const { id } = useParams();
  // =>url주소에 변수로 지정한 값을 객체 형태로 반환함
  // console.log(id);

  return (
    <Section>
      <ImgWrap>
        <img src={data[id].imgUrl} alt="" />
      </ImgWrap>
      <ConWrap>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </ConWrap>
    </Section>
  );
};
