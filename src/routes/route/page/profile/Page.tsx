import { Avatar, Box, Button, Card, CardContent, Container, Typography } from '@mui/material';

import { Session } from '@/features/authentication/types';

import { handelLogout } from '@/library/axios';
import { useOutletContext } from 'react-router-dom';

function ProfilePage() {
	const Session = useOutletContext<Session>();
	return (
		<>
			<Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 4 }}>
				<Typography variant="h5" sx={{ textAlign: 'center', color: 'text.secondary', fontWeight: 'bold' }}>
					{' '}
					User Profile
				</Typography>
				<Container maxWidth="md">
					<Card
						sx={{ borderRadius: '16px', display: 'flex', gap: '16px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '32px', boxShadow: 16, fontWeight: 'bold' }}>
						<Avatar
							sx={{
								width: 100,
								height: 100,

								backgroundColor: '#1976d2',
								fontSize: 40
							}}>
							{Session.user.name[0]}
						</Avatar>
						<Typography variant="subtitle1">
							<span style={{ color: 'blue' }}>user Name :</span> {Session.user.name}{' '}
						</Typography>
						<Typography variant="subtitle1">
							<span style={{ color: 'blue' }}>user Email :</span> {Session.user.email}{' '}
						</Typography>
						<Typography variant="subtitle1">
							<span style={{ color: 'blue' }}>user Role :</span> {Session.user.role}{' '}
						</Typography>
						<CardContent>
							<Button variant="contained" color="primary" onClick={handelLogout}>
								Log out
							</Button>
						</CardContent>
					</Card>
				</Container>
			</Box>
		</>
	);
}

export default ProfilePage;
