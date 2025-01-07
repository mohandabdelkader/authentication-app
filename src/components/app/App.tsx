// import { UserTokenContextProvider } from '@/context/userTokenContext';
import { ThemeProvider } from '@emotion/react';
// const LazyDataProvider = React.lazy(() => import('../../context/UserDataContext'));

import UserDataContextProvider from '@/context/UserDataContext';

import { generateTheme } from '@/library/material-ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Spinner } from '../loading/component';
// Lazy loading for the Auth route
const LazyAuth = React.lazy(() => import('../../routes/auth/index'));
const LazyLogin = React.lazy(() => import('../../routes/auth/pages/login/index'));
const LazyRegister = React.lazy(() => import('../../routes/auth/pages/register/index'));
const LazyForgetPassword = React.lazy(() => import('../../routes/auth/pages/forgetPassword/index'));
const LazyRestCode = React.lazy(() => import('../../routes/auth/pages/restCode/index'));
const LazyRestPassword = React.lazy(() => import('../../routes/auth/pages/restPassword/index'));
// route Home
const LazyHome = React.lazy(() => import('../../routes/route/index'));
const LazyProfile = React.lazy(() => import('../../routes/route/page/profile/index'));

function App(): ReactNode {
	const queryClient = new QueryClient();

	// Define the routes with TypeScript support
	const routes = createBrowserRouter([
		{
			path: '/',
			element: (
				<Suspense fallback={<Spinner />}>
					<LazyAuth />
				</Suspense>
			),
			children: [
				{
					path: 'login',
					element: (
						<Suspense>
							<LazyLogin />
						</Suspense>
					)
				},
				{
					index: true,

					element: (
						<Suspense>
							<LazyRegister />
						</Suspense>
					)
				},
				{
					path: 'forgetpassword',
					element: (
						<Suspense>
							<LazyForgetPassword />
						</Suspense>
					)
				},
				{
					path: 'restcode',
					element: (
						<Suspense>
							<LazyRestCode />
						</Suspense>
					)
				},
				{
					path: 'restpassword',
					element: (
						<Suspense>
							<LazyRestPassword />
						</Suspense>
					)
				}
			]
		},
		{
			path: '/home',
			element: (
				<Suspense fallback={<Spinner />}>
					<LazyHome />
				</Suspense>
			),
			children: [
				{
					path: 'profile',
					element: (
						<Suspense>
							<LazyProfile />
						</Suspense>
					)
				}
			]
		}
	]);

	return (
		<>
			{/* Provide the routes to the application */}
			<ThemeProvider theme={generateTheme}>
				<QueryClientProvider client={queryClient}>
					<UserDataContextProvider>
						<RouterProvider router={routes} />
					</UserDataContextProvider>
				</QueryClientProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
