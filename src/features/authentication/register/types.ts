export interface UserRegisterPayload {
	name: string;
	email: string;
	password: string;
	rePassword?: string;
	phone: string;
}
export interface ResponseData {
	message: string;
	token: string;
	user: {
		name: string;
		email: string;
		role: string;
	};
}
