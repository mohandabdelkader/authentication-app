export interface UserLoginPayload {
	email: string;
	password: string;
}
export interface UserLoginError {
	statusMsg: string;
	message: string;
}
