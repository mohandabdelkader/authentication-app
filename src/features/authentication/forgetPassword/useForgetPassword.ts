import { axiosInstance } from '@/library/axios';
import { EndPoints } from '@/library/enums';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseData } from '../register/types';
import { ForgetPasswordPayload } from './type';

function useForgetPassword() {
	const forgetPassword = async (payload: ForgetPasswordPayload): Promise<ResponseData> => {
		try {
			const axios = axiosInstance();
			const response = await axios.post<ResponseData>(EndPoints.FORGET, payload);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	return useMutation<ResponseData, AxiosError, ForgetPasswordPayload>({
		mutationKey: ['forget'],
		mutationFn: forgetPassword
	});
}

export default useForgetPassword;
