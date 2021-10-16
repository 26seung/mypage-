import React, { useRef, useState } from 'react';
import { ACCESS_TOKEN, FACEBOOK_AUTH_URL, GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../../../constants';
import AuthUtils from '../../../util/AuthUtils';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { required } from '../validations/validations';
import googleLogo from '../../../img/google-logo.png';
import fbLogo from '../../../img/fb-logo.png';
import naverLogo  from '../../../img/naver-logo.png';
import kakaoLogo  from '../../../img/kakao-logo.png';
import "./login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();


        if (checkBtn.current.context._errors.length === 0) {

            AuthUtils.login(username, password)
                .then((res) => {
                    localStorage.setItem(ACCESS_TOKEN, res.accessToken);
                    console.log(res.data)
                    window.history.push("/");
                    window.location.reload();
                },
                    (error) => {
                        const resMessage =
                            (error.res && error.res.data && error.res.data.message)
                            || error.message
                            || error.toString();

                        setLoading(false);
                        setMessage(resMessage);
                    }
                );
        } else {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Mypage 로그인</h1>

                <Form onSubmit={handleLogin} ref={form}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="아이디를 입력하세요"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>로그인</span>
                        </button>                       
                    </div>
                    <span className="signup-link">회원이 아니시라면? <Link to="/join">Sign up!</Link></span>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>

            <div className="social-login">
                <a className="btn btn-social social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> 구글 로그인</a>
                <a className="btn btn-social social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> 페이스북 로그인</a>
                <a className="btn btn-social social-btn naver" href={NAVER_AUTH_URL}>
                    <img src={naverLogo} alt="Naver" /> 네이버 로그인</a>
                <a className="btn btn-social social-btn kakao" href={KAKAO_AUTH_URL}>
                    <img src={kakaoLogo} alt="Kakao" /> 카카오톡 로그인</a>
            </div>
        </div>

    );
};

export default Login;