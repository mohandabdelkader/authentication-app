import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};
const Layout = ({ children }: Props) => {
	return <Box bgcolor={'#E3F2FD'}>{children}</Box>;
};

export default Layout;
