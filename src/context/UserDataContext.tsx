import { createContext, ReactNode, useState } from 'react';

interface UserDataType {
	userData: {
		name: string;
		email: string;
		phone: string;
	} | null;
	setUserData: React.Dispatch<
		React.SetStateAction<{
			name: string;
			email: string;
			phone: string;
		} | null>
	>;
}

export let userDataContext = createContext<UserDataType>({
	userData: null,
	setUserData: () => {}
});
export let UserDataContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [userData, setUserData] = useState<{
		name: string;
		email: string;
		phone: string;
	} | null>(null);
	return <userDataContext.Provider value={{ userData, setUserData }}>{children}</userDataContext.Provider>;
};
export default UserDataContextProvider;
