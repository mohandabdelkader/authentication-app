import { axiosInstance } from '@/library/axios';
import { EndPoints } from '@/library/enums';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { Session } from '../types';
import { ResponseData, UserRegisterPayload } from './types';

function useRegister() {
	const addUser = async (data: UserRegisterPayload) => {
		try {
			const axios = axiosInstance();
			const response = await axios.post<ResponseData>(EndPoints.USER, data);
			const session: Session = {
				token: response.data.token,
				user: response.data.user
			};
			window.localStorage.setItem('session', JSON.stringify(session));
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	return useMutation<ResponseData, AxiosError, UserRegisterPayload>({
		mutationKey: ['addUser'],
		mutationFn: addUser
	});
}

export default useRegister;
