import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  p {
    border-radius: 10px;
    width: 100px;
    height: 100px;
    background-color: salmon;
    font-size: 30px;
  }
  p:nth-child(2) {
    color: white;
  }
  .text {
    color: blue;
  }
  &:hover {
    background-color: gold;
  }

  &:nth-child(2) {
    border-radius: 50px;
  }
`;

export const StyleEx = () => {
  return (
    <div>
      <Box $bgColor="teal">
        <p>우와</p>
      </Box>

      <Box $bgColor="cornflowerblue">
        <p className="text">이예!</p>
        <p>이예!</p>
      </Box>
    </div>
  );
};
