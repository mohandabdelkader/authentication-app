import { axiosInstance } from '@/library/axios';
import { EndPoints } from '@/library/enums';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseData } from '../register/types';
import { RestPasswordPayload } from './type';

function useRestPassword() {
	const restPassword = async (payload: RestPasswordPayload): Promise<ResponseData> => {
		try {
			const axios = axiosInstance();
			const response = await axios.put<ResponseData>(EndPoints.REST_PASSWORD, payload);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	return useMutation<ResponseData, AxiosError, RestPasswordPayload>({
		mutationKey: ['restPassword'],
		mutationFn: restPassword
	});
}

export default useRestPassword;
