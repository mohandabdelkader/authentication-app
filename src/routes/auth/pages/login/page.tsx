import LoginForm from '@/features/authentication/login';
import { Box, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function Page() {
	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: '100vh',

					display: 'flex',

					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<Container maxWidth="md">
					<LoginForm />
				</Container>
			</Box>
			<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
		</>
	);
}

export default Page;
