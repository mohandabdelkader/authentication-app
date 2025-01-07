import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { BsEye } from 'react-icons/bs';

type Props = {
	label?: string;
	name: string;
	value: string | undefined;
	handleChange(e: React.ChangeEvent<any>): void;
	handleBlur(e: React.FocusEvent<any, Element>): void;
};

function PasswordInput({ handleBlur, handleChange, value, name, label }: Props) {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	function handelShowPassword(): void {
		setShowPassword(!showPassword);
	}
	return (
		<>
			<TextField
				label={label}
				type={showPassword ? 'text' : 'password'}
				variant="outlined"
				name={name}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				slotProps={{
					input: {
						endAdornment: (
							<InputAdornment position="end">
								<IconButton type="button" onClick={handelShowPassword}>
									<BsEye />
								</IconButton>
							</InputAdornment>
						)
					}
				}}
			/>
		</>
	);
}

export default PasswordInput;
