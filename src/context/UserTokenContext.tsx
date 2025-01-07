import { createContext, ReactNode, useState } from 'react';

interface stateType {
	userToken: string | null;
	setUserToken: (token: string | null) => void;
}
export let userTokenContext = createContext<stateType>({
	userToken: null,
	setUserToken() {}
});
export let UserTokenContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [userToken, setUserToken] = useState<string | null>('');
	return <userTokenContext.Provider value={{ userToken, setUserToken }}>{children}</userTokenContext.Provider>;
};
export default UserTokenContextProvider;
