import { RestCodePayload } from '@/features/authentication/restCode/type';
import useRestCode from '@/features/authentication/restCode/useRestCode';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function RestCodeForm() {
	const navigate = useNavigate();
	const { mutateAsync, isPending } = useRestCode();

	const Formik = useFormik<RestCodePayload>({
		initialValues: {
			resetCode: ''
		},
		onSubmit: async (payload) => {
			try {
				const response = await mutateAsync(payload);
				console.log('Response from API:', response.message);
				console.log(payload);

				toast.success(response.message);
				setTimeout(() => {
					navigate('/restpassword');
				}, 2000);
			} catch (error) {
				console.error('Error:', error);
				if (axios.isAxiosError(error)) {
					toast.error(error.response?.data?.message || 'An error occurred');
				}
			}
		}
	});
	return (
		<>
			<Box
				component={'form'}
				onSubmit={Formik.handleSubmit}
				sx={{
					display: 'flex',
					flexDirection: 'column',

					gap: 2,

					backgroundColor: '#fff',
					borderRadius: 2,
					boxShadow: 3,
					padding: 8
				}}>
				<TextField required label="Enter Rest Code" type="text" name="resetCode" value={Formik.values.resetCode} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
				<Button variant="contained" type="submit" disabled={isPending}>
					{isPending ? 'Submitting...' : 'Submit'}
				</Button>
			</Box>
		</>
	);
}

export default RestCodeForm;
