import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
`;

export const QuizEx01 = () => {
  const [bg, setBg] = useState("steelblue");
  const [on, setOn] = useState(true);

  const onColorChange = () => {
    if (on) {
      setBg("teal");
      setOn(false);
    } else if (!on) {
      setBg("steelblue");
      setOn(true);
    }
  };

  return (
    <div>
      {/* *문제 
    =>엘리먼트 하나 만들어서 
    클릭할때 마다 색상 2개와 왔다리 갔다리 하게 만들기~😎 */}

      <Box onClick={onColorChange} $bgColor={bg}></Box>
    </div>
  );
};
