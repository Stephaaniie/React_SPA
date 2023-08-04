import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';


export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="login" element={ <Login /> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
