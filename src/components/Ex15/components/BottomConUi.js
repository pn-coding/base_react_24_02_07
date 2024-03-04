import { Link } from "react-router-dom";
import { BottomCon } from "../styles/loginStyle";

export const BottomConUi = ({ message, text, link }) => {
  return (
    <BottomCon>
      {message} <Link to={link}>{text}</Link>
    </BottomCon>
  );
};
