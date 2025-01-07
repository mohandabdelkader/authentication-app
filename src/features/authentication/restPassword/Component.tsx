import PasswordInput from '@/components/PasswordInput';
import { RestPasswordPayload } from '@/features/authentication/restPassword/type';
import useRestPassword from '@/features/authentication/restPassword/useRestPassword';
import { Alert, Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handelValidationRestPassword } from './validation';

function RestPasswordForm() {
	const navigate = useNavigate();
	const { mutateAsync, isPending } = useRestPassword();
	const validationSchema = handelValidationRestPassword();

	const formik = useFormik<RestPasswordPayload>({
		initialValues: {
			email: '',
			newPassword: ''
		},
		validationSchema,
		onSubmit: async (payload) => {
			try {
				const response = await mutateAsync(payload);
				toast.success(response.message || 'Password reset successfully!');
				setTimeout(() => {
					navigate('/login');
				}, 2000);
			} catch (error: any) {
				const errorMessage = error.response?.data?.message || 'An unexpected error occurred. Please try again later.';
				toast.error(errorMessage);
			}
		}
	});

	return (
		<>
			<Box
				onSubmit={formik.handleSubmit}
				component={'form'}
				sx={{
					display: 'flex',
					flexDirection: 'column',

					gap: 2,
					padding: 8,
					backgroundColor: '#fff',
					borderRadius: 2,
					boxShadow: 3
				}}>
				<TextField label="Email" type="email" variant="outlined" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.errors.email && formik.touched.email ? <Alert severity="error">{formik.errors.email}</Alert> : null}
				<PasswordInput label="Enter New Password" value={formik.values.newPassword} name="newPassword" handleBlur={formik.handleBlur} handleChange={formik.handleChange} />
				{formik.errors.newPassword && formik.touched.newPassword ? <Alert severity="error">{formik.errors.newPassword}</Alert> : null}
				<Button variant="contained" type="submit" disabled={isPending}>
					{isPending ? 'Submitting...' : 'Submit'}
				</Button>
			</Box>
		</>
	);
}

export default RestPasswordForm;
