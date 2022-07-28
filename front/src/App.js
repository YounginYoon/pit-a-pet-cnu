import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import PostList from './pages/PostList';
import Post from './pages/Post';
import Write from './pages/Write';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PostList />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/register" element={<Register />}></Route>
					<Route path="/write" element={<Write />}></Route>
					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
					<Route path="/@:username">
						<Route index element={<PostList />} />
						<Route path=":postId" element={<Post />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
