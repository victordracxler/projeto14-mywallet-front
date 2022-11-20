import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
	const [user, setUser] = useState(
		localStorage.getItem('mwuser')
			? JSON.parse(localStorage.getItem('mwuser'))
			: {}
	);

	const [bearer, setBearer] = useState(
		localStorage.getItem('mwtoken')
			? JSON.parse(localStorage.getItem('mwtoken'))
			: {}
	);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				bearer,
				setBearer,
			}}
		>
			{children}
		</UserContext.Provider>
	);
}

export default UserContext;

export { UserProvider };
