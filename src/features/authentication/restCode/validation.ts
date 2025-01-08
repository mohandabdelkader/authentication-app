import * as yup from 'yup';
export const validationRestCode = (): any => {
	return yup.object().shape({
		resetCode: yup.string().max(8, 'Max 8 number and char').min(3, 'Min 3 Number And Char')
	});
};
