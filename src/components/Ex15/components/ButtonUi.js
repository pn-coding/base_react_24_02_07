import { Button } from "../styles/loginStyle";

export const ButtonUi = ({ isValid, text }) => {
  return <Button $isActive={isValid}>{text}</Button>;
};
