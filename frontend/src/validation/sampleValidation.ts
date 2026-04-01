import * as yup from "yup";

const sampleValidation = yup.object({
    // 사용법: id별명: yup.타입().에러().필수(),
  userId: yup.number().typeError("숫자에러").required("필수"),
  title: yup.string().required("필수"),
  email: yup.string().email("이메일형식에러").required("필수"),
  password: yup.string().min(6, `6자 이상 입력해주세요.`).required("필수"),
  hiredate: yup.date().required("필수"),
});

export default sampleValidation;
