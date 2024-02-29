import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SUserArea = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  opacity: 0.9;
  margin-top: 40px;
  border-radius: 100px;
  padding: 10px;
  color: #808080;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  h3 {
    font-size: 14px;
    margin-left: 10px;
  }
`;

const UserImg = styled.div`
  width: 45px;
  height: 45px;
  background-color: #808080;
  border-radius: 50%;
`;

const NextBtn = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

export const UserArea = () => {
  return (
    <SUserArea>
      <Profile>
        <UserImg />
        <h3>Pncoding</h3>
      </Profile>

      <NextBtn>
        <FontAwesomeIcon icon={faForwardStep} />
      </NextBtn>
    </SUserArea>
  );
};
