import styled from "styled-components";

const SProgessWrap = styled.div`
  width: 100%;
  margin: 30px 0;
`;

const Progress = styled.div`
  height: 5px;
  background-color: gray;
`;

const Bar = styled.div`
  width: 10%;
  height: 100%;
  background-color: cornflowerblue;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.7;
`;

export const ProgessWrap = () => {
  return (
    <SProgessWrap>
      <Progress>
        <Bar></Bar>
      </Progress>

      <TimeWrap>
        <p>00:03</p>
        <p>03:41</p>
      </TimeWrap>
    </SProgessWrap>
  );
};
