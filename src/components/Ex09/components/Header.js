import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link> <br />
      <Link to="/sub01">SUB01</Link> <br />
      <Link to="/sub02">SUB02</Link> <br />
    </div>
  );
};
