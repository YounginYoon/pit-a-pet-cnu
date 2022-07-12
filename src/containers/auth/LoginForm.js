import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

//useSelector : 리덕스 state 조회
//useDispatch : 생성한 액션을 발생시키는 hook, 만들어둔 액션 생성함수를 import하여 사용
const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector( ({auth})  => ({
        form : auth.login
    }));
    //dispatch : 액션 발생시킴
    const onChange = e => {
        const {value, name} = e.target;

        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
    }

    useEffect( ()=> {
        //액션 생성 함수 import
        dispatch(initializeForm('login'));
    }, [dispatch]);

    return (
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    );
};

export default LoginForm;