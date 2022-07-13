import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
