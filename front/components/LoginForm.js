import {useCallback, useState} from "react";
import PropTypes from 'prop-types';
import {Button, Form, Input} from "antd";
import Link from "next/link";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import {useDispatch} from "react-redux";
import {loginAction} from "../reducers";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  // redux action을 사용하려면 필요
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    // redux action 호출
    dispatch(loginAction({id, password}));
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br/>
        <Input
          name="user-id"
          value={id}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br/>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button
          type="primary"
          htmlType="submit"
          loading={false}
        >
          로그인
        </Button>
        <Link href="/signup">
          <a><Button>회원가입</Button></a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;