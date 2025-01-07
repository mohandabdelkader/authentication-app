import { UserLoginPayload } from '@/features/authentication/login/types';
import useLogin from '@/features/authentication/login/useLogin';
import { Alert, Box, Button, Link, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';

import PasswordInput from '@/components/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handelValidationSchema } from './Validation';

function LoginForm() {
	const navigate = useNavigate();
	const [loginAttempts, setLoginAttempts] = useState<number>(0);
	const schemaValidation = handelValidationSchema();

	const { mutateAsync, isPending } = useLogin();
	const formik = useFormik<UserLoginPayload>({
		initialValues: {
			email: '',
			password: ''
		},
		onSubmit: async (payload) => {
			try {
				const response = await mutateAsync(payload);
				setLoginAttempts(0);
				toast.success(response.message);
				formik.resetForm();
				setTimeout(() => {
					navigate('/home/profile');
				}, 2000);
				console.log(payload);
			} catch (error) {
				setLoginAttempts((prev) => prev + 1);
				if (axios.isAxiosError(error)) {
					console.log(error.response?.data.message);
					toast.error(error.response?.data.message);
					throw error;
				} else {
					console.log(error);
					throw error;
				}
			}
		},
		validationSchema: schemaValidation
	});
	if (loginAttempts >= 4) {
		toast.info('Too many failed attempts! Redirecting to forget password...');
		setTimeout(() => {
			window.location.href = 'http://localhost:5173/auth/forgetpassword';
		});
	}

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
				<TextField label="Email" type="email" variant="outlined" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
				{formik.touched.email && formik.errors.email ? <Alert severity="error">{formik.errors.email}</Alert> : null}
				<PasswordInput label="Enter Password" value={formik.values.password} name="password" handleBlur={formik.handleBlur} handleChange={formik.handleChange} />
				{formik.touched.password && formik.errors.password ? <Alert severity="error">{formik.errors.password}</Alert> : null}

				<Button variant="contained" color="primary" type="submit" disabled={isPending}>
					{isPending ? 'Submitting...' : 'Submit'}
				</Button>
				<Link
					href="http://localhost:5173/"
					sx={{
						color: 'primary.main',
						textDecoration: 'none',
						textAlign: 'center',
						'&:hover': {
							textDecoration: 'underline'
						}
					}}>
					Go to Register Website
				</Link>
				<Link
					href="http://localhost:5173/forgetpassword"
					sx={{
						color: 'primary.main',
						textDecoration: 'none',
						textAlign: 'center',
						'&:hover': {
							textDecoration: 'underline'
						}
					}}>
					Go to forget Password Website
				</Link>
			</Box>
		</>
	);
}

export default LoginForm;
