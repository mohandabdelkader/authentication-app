import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const AuthLayout = lazy(() => import('./Layout/index'));
function Route(): JSX.Element {
	const session = JSON.parse(window.localStorage.getItem('session') || 'false');
	if (session) {
		return <Navigate to={'/home/profile'} />;
	}
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<AuthLayout>
				<Outlet />
			</AuthLayout>
		</Suspense>
	);
}

export default Route;
