import styled from "styled-components";
import { colors } from "../../GlobalStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faApple, faApplePay } from "@fortawesome/free-brands-svg-icons";

const ConWrap = styled.div`
  width: 1400px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  svg {
    color: red;
    font-size: 30px;
  }
`;

const Bg = styled.div`
  height: 400px;
  background-color: ${colors.main};
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 20px 0 10px 0;
  color: ${colors.title};
`;

const Desc = styled.div`
  color: ${colors.desc};
`;

export const Ex05 = () => {
  return (
    <div>
      <ConWrap>
        <Con>
          <Bg></Bg>
          <FontAwesomeIcon icon={faHeart} />
          <Title>title 01</Title>
          <Desc>Contents01 description</Desc>
        </Con>

        <Con>
          <Bg></Bg>
          <FontAwesomeIcon icon={faApple} />
          <Title>title 02</Title>
          <Desc>Contents02 description</Desc>
        </Con>

        <Con>
          <Bg></Bg>
          <FontAwesomeIcon icon={faApplePay} />
          <Title>title 03</Title>
          <Desc>Contents03 description</Desc>
        </Con>
      </ConWrap>
    </div>
  );
};
