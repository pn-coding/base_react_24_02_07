import { useParams } from "react-router-dom";
import { data } from "../api/data";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px 100px;
  h3 {
    font-size: 22px;
    font-weight: 900;
    margin: 20px 0;
  }
`;

const Bg = styled.div`
  height: 600px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Sub = () => {
  const { id } = useParams();
  console.log(data);
  return (
    <Container>
      <Bg $bgUrl={data[id].coverImg} />
      <h3>{data[id].title}</h3>
      <p>{data[id].desc}</p>
    </Container>
  );
};
