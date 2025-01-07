import PasswordInput from '@/components/PasswordInput';
import { useRegister } from '@/features/authentication/register';
import { UserRegisterPayload } from '@/features/authentication/register/types';
import { Alert, Box, Button, Link, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handelValidationSchemaRegister } from './Validation';

const RegisterForm = () => {
	const navigate = useNavigate();
	const validationSchema = handelValidationSchemaRegister();
	const { mutateAsync, isPending } = useRegister();

	const formik = useFormik<UserRegisterPayload>({
		initialValues: {
			name: '',
			email: '',
			password: '',
			rePassword: '',
			phone: ''
		},
		onSubmit: async (payload) => {
			try {
				const response = await mutateAsync(payload);

				toast.success(response.message);
				setTimeout(() => {
					navigate('/home/profile');
				}, 2000);
				formik.resetForm();
			} catch (error) {
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data.message);
					throw error;
				}

				throw error;
			}
		},
		validationSchema
	});

	return (
		<>
			<Box
				component="form"
				onSubmit={formik.handleSubmit}
				sx={{
					display: 'flex',

					flexDirection: 'column',
					gap: 2,
					padding: 2,
					backgroundColor: '#fff',
					borderRadius: 2,
					boxShadow: 3
				}}>
				<TextField label="Name" type="text" variant="outlined" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.errors.name && formik.touched.name ? (
					<Alert severity="error" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
						{' '}
						{formik.errors.name}
					</Alert>
				) : null}
				<TextField label="Email" type="email" variant="outlined" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.errors.email && formik.touched.email ? (
					<Alert severity="error" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
						{' '}
						{formik.errors.email}
					</Alert>
				) : null}

				<PasswordInput label="Enter Password" name="password" value={formik.values.password} handleChange={formik.handleChange} handleBlur={formik.handleBlur} />

				{formik.errors.password && formik.touched.password ? (
					<Alert severity="error" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
						{' '}
						{formik.errors.password}
					</Alert>
				) : null}
				<PasswordInput label="enter Re Password" name="rePassword" value={formik.values.rePassword} handleChange={formik.handleChange} handleBlur={formik.handleBlur} />

				{formik.errors.rePassword && formik.touched.rePassword ? (
					<Alert severity="error" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
						{' '}
						{formik.errors.rePassword}
					</Alert>
				) : null}
				<TextField label="Phone" type="tel" variant="outlined" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.errors.phone && formik.touched.phone ? (
					<Alert severity="error" sx={{ textAlign: 'center', textTransform: 'uppercase' }}>
						{' '}
						{formik.errors.phone}
					</Alert>
				) : null}

				<Button variant="contained" color="primary" type="submit" disabled={isPending}>
					{isPending ? 'Submitting...' : 'Submit'}
				</Button>
				<Link
					href="http://localhost:5173/login"
					sx={{
						color: 'primary.main',
						textDecoration: 'none',
						textAlign: 'center',
						'&:hover': {
							textDecoration: 'underline'
						}
					}}>
					Go to login Website
				</Link>
			</Box>
		</>
	);
};

export default RegisterForm;
