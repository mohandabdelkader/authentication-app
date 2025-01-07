import RestCodeForm from '@/features/authentication/restCode';
import { Box, Container, Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function Page() {
	return (
		<>
			<Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
				<Typography variant="h5">Rest Code Page</Typography>
				<Container maxWidth="md">
					<RestCodeForm />
				</Container>
				<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover />
			</Box>
		</>
	);
}

export default Page;
