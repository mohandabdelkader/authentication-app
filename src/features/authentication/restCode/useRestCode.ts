import { axiosInstance } from '@/library/axios';
import { EndPoints } from '@/library/enums';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { ResponseData } from '../register/types';
import { RestCodePayload } from './type';

function useRestCode() {
	const restCode = async (payload: RestCodePayload) => {
		try {
			const axios = axiosInstance();
			const response = await axios.post<ResponseData>(EndPoints.REST, payload);
			return response.data;
		} catch (error) {
			throw error;
		}
	};
	return useMutation<ResponseData, AxiosError, RestCodePayload>({
		mutationKey: ['restCode'],
		mutationFn: restCode
	});
}

export default useRestCode;
