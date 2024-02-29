import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SPlayBtns = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .pause_btn {
    width: 50px;
    height: 50px;
    background-color: cornflowerblue;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    font-size: 18px;
  }
`;

const Btn = styled.div``;

export const PlayBtns = () => {
  return (
    <SPlayBtns>
      <li>
        <FontAwesomeIcon icon={faShuffle} />
      </li>

      <li>
        <FontAwesomeIcon icon={faBackward} />
      </li>

      <li className="pause_btn">
        <FontAwesomeIcon icon={faPause} />
      </li>

      <li>
        <FontAwesomeIcon icon={faForward} />
      </li>

      <li>
        <FontAwesomeIcon icon={faRepeat} />
      </li>
    </SPlayBtns>
  );
};
