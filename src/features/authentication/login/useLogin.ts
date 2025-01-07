import { axiosInstance } from '@/library/axios';
import { EndPoints } from '@/library/enums';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseData } from '../register/types';
import { Session } from '../types';
import { UserLoginPayload } from './types';

function useLogin() {
	const Login = async (payload: UserLoginPayload) => {
		try {
			const axios = axiosInstance();
			const response = await axios.post<ResponseData>(EndPoints.LOGIN, payload);
			const session: Session = {
				token: response.data.token,
				user: response.data.user
			};
			window.localStorage.setItem('session', JSON.stringify(session));
			return response.data;
		} catch (error) {
			throw error;
		}
	};

	return useMutation<ResponseData, AxiosError, UserLoginPayload>({
		mutationKey: ['login'],
		mutationFn: Login
	});
}

export default useLogin;
