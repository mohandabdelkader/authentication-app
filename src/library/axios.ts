import axios from 'axios';

export const handelLogout = (): void => {
	localStorage.removeItem('session');
	window.location.href = '/login';
};
export const axiosInstance = () => {
	const instance = axios.create({
		baseURL: import.meta.env.VITE_API_URL
	});

	instance.interceptors.request.use(
		(config) => {
			const session = JSON.parse(window.localStorage.getItem('session') || 'false');

			if (session) {
				config.headers.Authorization = `${session.token}`;
			}
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	return instance;
};
