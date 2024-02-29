import styled from "styled-components";

const Message = styled.div`
  width: 100%;
  color: crimson;
  text-align: left;
  margin-top: 5px;
`;

export const ErrorMessage = ({ text }) => {
  return <Message>{text}</Message>;
};

