import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import GlobalStyle from './GlobalStyle';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

export default function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<SignInPage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/home" element={<MainPage />} />
					{/* <Route path="/hoje" element={<TodayPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/historico" element={<HistoryPage/>} /> */}
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
