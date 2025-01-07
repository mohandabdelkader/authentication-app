import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<>
			<Box bgcolor={'#E3F2FD'}>{children}</Box>;
		</>
	);
};

export default Layout;
