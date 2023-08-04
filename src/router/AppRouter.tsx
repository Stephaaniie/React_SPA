import { Navigate, Route, Routes } from 'react-router-dom';

import { CheckingAuth } from '../ui/index';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { CajeroRoutes } from '../cajero/routes/cajeroRoutes';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {
        (status === 'authenticated')
          ? <Route path="/*" element={<CajeroRoutes />} />
          : <Route path="/auth/*" element={<AuthRoutes />} />
      }                 
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
