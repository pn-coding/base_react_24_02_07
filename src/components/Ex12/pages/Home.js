import { Link } from "react-router-dom";
import { data } from "../api/data";
import styled from "styled-components";
import { globalSpace } from "../../../GlobalStyles";

const Wrap = styled.div`
  padding: ${globalSpace.section};
  display: flex;
  flex-wrap: wrap;
`;

const Con = styled.div`
  width: 350px;
  margin: 0 20px 50px 0;

  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  a {
    color: #1d1d1d;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      {data.map((con) => (
        <Con key={con.id}>
          <Link to={`/sub/${con.id}`}>
            <ImgWrap>
              <img src={con.coverImg} alt={con.title} />
            </ImgWrap>
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </Link>
        </Con>
      ))}
    </Wrap>
  );
};

// react helmet
