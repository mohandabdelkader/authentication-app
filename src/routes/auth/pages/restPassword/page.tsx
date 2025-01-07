import RestPasswordForm from '@/features/authentication/restPassword';
import { Box, Container } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function Page() {
	return (
		<>
			<Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<Container maxWidth="md">
					<RestPasswordForm />
				</Container>
				<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
			</Box>
		</>
	);
}

export default Page;
