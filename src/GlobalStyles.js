import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  main: "cornflowerblue",
  title: "#1d1d1d",
  desc: "#808080",
};

export const globalSpace = {
  section: "150px 350px",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    body{
        font-family: "Noto Sans KR", sans-serif;
    }

    img{
        width: 100%;
        display: block;
    }

    a{
        text-decoration: none;
    }
`;
