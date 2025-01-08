import * as yup from 'yup';
import { ForgetPasswordPayload } from './type';

export const handelValidationForgetPassword = (): yup.ObjectSchema<ForgetPasswordPayload> => {
	return yup.object().shape({
		email: yup.string().email('This Is Invalid Email').required('This Is Required')
	});
};
