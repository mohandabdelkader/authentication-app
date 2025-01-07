import { Box, CircularProgress } from '@mui/material';

export function Spinner(): JSX.Element {
	return (
		<>
			<Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<CircularProgress size={80} />
			</Box>
		</>
	);
}
