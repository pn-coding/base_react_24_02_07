import styled from "styled-components";

const STitleWrap = styled.div`
  h3 {
    font-size: 22px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    opacity: 0.7;
    margin-top: 15px;
  }
`;

export const TitleWrap = () => {
  return (
    <STitleWrap>
      <h3>Blue bird</h3>
      <p>Pick Dreams</p>
    </STitleWrap>
  );
};
