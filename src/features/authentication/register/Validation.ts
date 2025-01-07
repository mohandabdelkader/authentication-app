import { PASSWORD_REGEX, PHONE_REGEX } from '@/library/constants';
import * as yup from 'yup';
import { UserRegisterPayload } from './types';

export const handelValidationSchemaRegister = (): yup.ObjectSchema<UserRegisterPayload> => {
	return yup.object().shape({
		name: yup.string().min(3, 'min char 3').max(10, 'max char 10').required('this is required'),
		email: yup.string().email('Please enter a valid email address.').required('this is required'),
		password: yup
			.string()
			.required('this is required')
			.matches(PASSWORD_REGEX, 'Password must start with an uppercase letter, contain only letters and numbers, and be between 3 to 9 characters long'),
		rePassword: yup.string().oneOf([yup.ref('password')]),
		phone: yup.string().matches(PHONE_REGEX, 'start(012/011/010/015').required('this is required')
	});
};
