import { Alert, Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ForgetPasswordPayload } from './type';
import useForgetPassword from './useForgetPassword';
import { handelValidationForgetPassword } from './validation';

function ForgetPasswordForm() {
	const validationSchema = handelValidationForgetPassword();
	const { mutateAsync, isPending } = useForgetPassword();
	const navigate = useNavigate();
	const formik = useFormik<ForgetPasswordPayload>({
		initialValues: {
			email: ''
		},
		onSubmit: async (payload) => {
			try {
				const response = await mutateAsync(payload);
				formik.resetForm();
				toast.success(response.message);
				setTimeout(() => {
					navigate('/restcode');
				}, 3000);

				return response;
			} catch (error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data.message);
				}
			}
		},
		validationSchema
	});

	return (
		<Box
			onSubmit={formik.handleSubmit}
			component={'form'}
			sx={{
				// height: '100vh',

				display: 'flex',
				flexDirection: 'column',
				padding: 8,
				gap: 2,

				backgroundColor: '#fff',
				borderRadius: 2,
				boxShadow: 3

				// background: 'red'
			}}>
			<TextField required label="Enter Your Email" type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" />
			{formik.touched.email && formik.errors.email ? <Alert severity="error">{formik.errors.email}</Alert> : null}
			<Button variant="contained" type="submit" disabled={isPending}>
				{isPending ? 'Submitting...' : 'Submit'}
			</Button>
		</Box>
	);
}

export default ForgetPasswordForm;
