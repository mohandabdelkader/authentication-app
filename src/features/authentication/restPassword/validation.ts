import { PASSWORD_REGEX } from '@/library/constants';
import * as yup from 'yup';
import { RestPasswordPayload } from './type';

export const handelValidationRestPassword = (): yup.ObjectSchema<RestPasswordPayload> => {
	return yup.object().shape({
		email: yup.string().required('this email is required').email('this invalid email'),
		newPassword: yup.string().required('this Password is required').matches(PASSWORD_REGEX)
	});
};
