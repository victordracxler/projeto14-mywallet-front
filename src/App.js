import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { UserProvider } from './context/User';

export default function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					{/* <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SignUpPage/>} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/historico" element={<HistoryPage/>} /> */}
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}
