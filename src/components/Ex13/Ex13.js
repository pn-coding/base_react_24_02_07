import { useForm } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "./components/ErrorMessage";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: 600px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  margin-top: 150px;
  padding: 120px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 60px;
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  background-color: skyblue;
  color: white;
  border-radius: 5px;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  opacity: ${(props) => (props?.$isActive ? 1 : 0.4)};
`;

export const Ex13 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  console.log(isValid);
  //   console.log("값이 유효한가? " + isValid);
  //   =>인풋태그 유효성을 검사후 boolean값으로 반환함

  //   console.log(errors.username.message);
  //   =>폼 사용중 발생한 에러를 객체값으로 반환함
  //   console.log(errors && errors.username && errors.username.message);
  //   console.log(errors?.username?.message);
  //   =>?.(optional chaining) 을 사용하면 프로퍼티가 없는 중첩 객체를
  //   에러 없이 안전하게 접근할 수 있음

  const onSubmit = (data) => {
    // console.log("서브밋 이벤트 작동함");
    // console.log(data);
    // =>유저가 input태그에 입력한 value값을 객체로 반환함

    // const username = data.username;
    // const password = data.password;
    const { username, password } = data;
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <input
          {...register("username", {
            required: "아이디는 필수 입니다.",
            minLength: {
              value: 2,
              message: "아이디는 2자리이상 작성",
            },
          })}
          type="text"
          placeholder="아이디"
        />

        <input
          {...register("password", {
            required: "패스워드는 필수 입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성해주세요.",
            },
            // pattern: {
            //   value:
            //     /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#.~_-])[A-Za-z\d@$!%*?&#.~_-]{8,20}$/,
            //   message:
            //     "비밀번호는 최소 8자 이상 대소문자, 특수문자를 포함해야 합니다.",
            // },
          })}
          type="password"
          placeholder="패스워드"
        />

        <ErrorMessage text={errors?.username?.message} />
        <ErrorMessage text={errors?.password?.message} />

        <Button $isActive={isValid}>로그인</Button>
      </Form>
    </Wrap>
  );
};

// ######################
// isValid처리하기
// helmet
// ######################
