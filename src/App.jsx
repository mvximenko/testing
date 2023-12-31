import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootRoute from './routes/RootRoute';
import HomeRoute from './routes/HomeRoute';
import NotFoundRoute from './routes/NotFoundRoute';
import RepositoriesSearchRoute from './routes/RepositoriesSearchRoute';
import SignUpRoute from './routes/SignUpRoute';
import SignInRoute from './routes/SignInRoute';
import SignOutRoute from './routes/SignOutRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    children: [
      {
        path: 'signout',
        element: <SignOutRoute />,
      },
      {
        path: 'signup',
        element: <SignUpRoute />,
      },
      {
        path: 'signin',
        element: <SignInRoute />,
      },
      {
        path: '',
        element: <HomeRoute />,
      },
      {
        path: 'repositories',
        element: <RepositoriesSearchRoute />,
      },
      {
        path: '*',
        element: <NotFoundRoute />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
