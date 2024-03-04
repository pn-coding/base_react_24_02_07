import styled from "styled-components";

export const Container = styled.div`
  padding: 150px 30%;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  padding: 100px 40px;
  input {
    all: unset;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    padding-left: 15px;
    margin-top: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 18px;
  background-color: steelblue;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
`;

export const Seper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  div {
    width: 40%;
    height: 1px;
    background-color: #dbdbdb;
  }
`;

export const BottomCon = styled.div``;

export const ErrorMessage = styled.div`
  font-size-adjust: 14px;
  color: crimson;
  margin-top: 5px;
  text-align: left;
  width: 100%;
  font-weight: 600;
`;
