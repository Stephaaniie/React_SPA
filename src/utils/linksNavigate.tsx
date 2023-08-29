import { Login } from '@mui/icons-material';
import { createBrowserRouter } from 'react-router-dom';
import useProtectedRoute from '../router/ProtectedRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <useProtectedRoute />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/me",
          element: <Profile />,
        },
      ],
    },
  ]);

export default linksNavigate
