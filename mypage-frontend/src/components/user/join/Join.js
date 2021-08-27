import React, { useEffect, useRef, useState } from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthUtils from '../../../util/AuthUtils';
import { required, validEmail, vbirthday, vpassword, vusername } from '../validations/validations';


const Join = () => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError,setPasswordError] = useState(false);
    const [nickname, setNickname] = useState("");
    const [gender, setGender] = useState("");
    const [birthday, setBirthday] = useState("");

    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const onChangePasswordChk = (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    };
    const onChangeNickname = (e) => {
      const nickname = e.target.value;
      setNickname(nickname);
    };
    const onChangeGender = (e) => {
      const gender = e.target.value;
      setGender(gender);
    };
    const onChangeBirthday = (e) => {
      const birthday = e.target.value;
      setBirthday(birthday);
    };


    const handleRegister = (e) => {
      e.preventDefault();

      setMessage('');
      setSuccessful(false);

      form.current.validateAll();

  //     if(password !== passwordCheck){
  //      return setPasswordError(true);
  //  }
      if(checkBtn.current.context._errors.length === 0) {
        
         AuthUtils.join(username,email,password)
          .then(()=>{
              setMessage('회원가입성공');
              setSuccessful(true);
          },
          (error) => {
              const resMessage = 
              (error.res && error.res.data && error.res.data.message) || error.message || error.toString();

              setMessage(resMessage);
              console.log("resMessage: ",resMessage)
              setSuccessful(false);
          });
      }
   };

   useEffect(() => {
   })

    
    return (
        <div className="login-container">
        <div className="login-content">    
  
          <Form onSubmit={handleRegister} ref={form}>
            {!successful && (
              <div>
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    placeholder='아이디'
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
  
                <div className="form-group">
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    placeholder='이메일'
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>
  
                <div className="form-group">
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    placeholder='비밀번호'
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                {/* <div className="form-group">
                  <label htmlFor="passwordCheck">PasswordCheck</label>
                  <Input
                    type="password"
                    className="form-control"  
                    name="passwordCheck"
                    value={passwordCheck}
                    placeholder='비밀번호 확인'
                    onChange={onChangePasswordChk}                    
                  />
                  {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div> */}
                
{/* 
                <div>
                  <label><strong>추가정보 ---</strong></label>
                </div>


                <div className="form-group">
                  <label htmlFor="nickname">nickname</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nickname"
                    value={nickname}
                    placeholder='닉네임'
                    onChange={onChangeNickname}
                    validations={[required, vusername]}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="birthday">birthday</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="birthday"
                    value={birthday}
                    placeholder='생년월일 (yy.mm.dd)'
                    required pattern="\d{2}\d{2}\d{2}"
                    onChange={onChangeBirthday}
                    validations={[required, vbirthday]}
                  />
                </div>

                <div className="form-check">
                  <label htmlFor="gender"></label>
                    <label>
                      <Input type="radio" className="form-check-input"
                        name="gender" value="MALE" onChange={onChangeGender}
                      />남성
                    </label>
                    <label>
                      <Input type="radio" className="form-check-input" 
                       name="gender" value="FEMALE" onChange={onChangeGender} 
                      />여성
                    </label>                 
                </div> */}

                <div className="form-group">
                  <button className="btn btn-primary btn-block">회원가입</button>
                </div>
              </div>
            )}
  
            {message && (
              <div className="form-group">
                <div
                  className={ successful ? "alert alert-success" : "alert alert-danger" }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    );
};

export default Join;