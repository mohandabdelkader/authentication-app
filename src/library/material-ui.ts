import { createTheme } from '@mui/material';

export const generateTheme = () => {
	const theme = createTheme({
		palette: {
			mode: 'light',
			primary: { main: '#321fdb' },
			secondary: { main: '#636f83' },
			text: { primary: '#252525', secondary: '#000000', disabled: '#D7D7D7' },
			background: { default: '#ebedef', paper: '#FFFFFF' }
		},

		typography: {
			subtitle1: {
				fontFamily: '"Open Sans", serif',
				fontWeight: 'bold',
				textTransform: 'uppercase'
			}
		},
		shape: {
			borderRadius: 16
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: '80px',
						fontWeight: 'bold',
						fontSize: 12
					},
					containedPrimary: {
						background: '#321fdb',
						color: '#FFFFFF',
						'&:hover': {
							background: '#1f1fab'
						}
					},
					containedSecondary: {
						background: '#636f83',
						color: '#FFFFFF',
						'&:hover': {
							background: '#4a5667'
						}
					}
				}
			}
		}
	});

	return theme;
};
