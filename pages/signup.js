import React, { useState, useCallback } from 'react';
import { Input, Form, Checkbox, Button } from 'antd';

export const useInput = (initValue = null) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback((e) => {
    setter(e.target.value);
  }, []);
  return [value, handler];
};

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }

      console.log({
        id,
        nick,
        password,
        passwordCheck,
        term,
      });
    },
    [password, passwordCheck, term],
  );

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangeNick = useCallback((e) => {
    setNick(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onChangePasswordChk = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password],
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-pass">비밀번호</label>
          <br />
          <Input name="user-pass" value={password} type="password" required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-pass-chk">비밀번호체크</label>
          <br />
          <Input name="user-pass-chk" value={passwordCheck} type="password" required onChange={onChangePasswordChk} />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
            동의?
          </Checkbox>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              가입하기
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Signup;
