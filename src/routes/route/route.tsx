import { Suspense, lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/index'));

function Route(): JSX.Element {
	const session = JSON.parse(window.localStorage.getItem('session') || 'false');
	if (!session) {
		return <Navigate to={'/login'} />;
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Layout>
				<Outlet context={session} />
			</Layout>
		</Suspense>
	);
}

export default Route;
