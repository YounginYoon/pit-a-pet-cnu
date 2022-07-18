import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import palette from "../../lib/styles/palette";
import Button from "../common/Button";

//회원가입, 로그인 폼 작성

const AuthFormBlock = styled.div`
    h3{
        margin: 0;
        color:${palette.gray[8]};
        margin-bottom: 1rem;
    }

`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const StyledInput = styled.input`
    font-size:1rem;
    border:none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color: $oc-teal-7;
        border-bottom:1px solid ${palette.gray[7]} ;
    }
    /* Scss 에서 쓰는 요소가 서로 반복될 때 margin-top 을 줌 >>> input 과 input 사이에 margin-top 줌. */
    &+&{
        margin-top: 1rem;
    }
`

//하단에 회원가입 링크
const Footer = styled.div`
    margin-top:2rem;
    text-align : right;
    a {
        color : 1px solid ${palette.gray[6]};
        text-decoration:underline;
        &:hover{
            color:1px solid ${palette.gray[9]}
        }
    }
`
const textMap = {
    login: '로그인',
    register: '회원가입'
}

//에러 메세지
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    front-size: 0.875rem;
    margin-top: 1rem;
`;
const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput
                autoComplete="username"
                name="username"
                placeholder="아이디"
                onChange={onChange}
                value = {form.username}
                />

                <StyledInput
                autoComplete="current-password"
                name="password"
                placeholder="비밀번호"
                type = "password"
                onChange={onChange}
                value = {form.password}
                />

                {type == 'register' && (
                    <StyledInput 
                    autoComplete="new-password" 
                    name="passwordConfirm" 
                    placeholder="비밀번호 확인" 
                    type="password"
                    onChange={onChange}
                    value = {form.passwordConfirm} />
                    )
                }
                {error && <ErrorMessage>{error}</ErrorMessage>}

                <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>

            </form>

            <Footer>
                {type == 'login' ? (
                    <Link to="/register">회원가입</Link>
                ):(
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );

};

export default AuthForm;