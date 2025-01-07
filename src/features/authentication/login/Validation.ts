import { PASSWORD_REGEX } from '@/library/constants';
import * as yup from 'yup';

interface ValidationType {
	email: string;
	password: string;
}
export const handelValidationSchema = (): yup.ObjectSchema<ValidationType> => {
	return yup.object().shape({
		email: yup.string().required('this is required').email('Please enter a valid email address.'),
		password: yup.string().required('this is required').matches(PASSWORD_REGEX, 'Password must start with an uppercase letter, contain only letters and numbers, and be between 3 to 9 characters long')
	});
};
