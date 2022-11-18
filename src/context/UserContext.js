import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(
		localStorage.getItem('user')
			? JSON.parse(localStorage.getItem('user'))
			: {}
	);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}
