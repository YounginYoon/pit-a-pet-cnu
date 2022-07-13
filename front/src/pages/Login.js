import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';
import LoginForm from '../containers/auth/LoginForm';

const Login = (props) => {
	return (
		<AuthTemplate>
			<LoginForm />
		</AuthTemplate>
	);
};

export default Login;
