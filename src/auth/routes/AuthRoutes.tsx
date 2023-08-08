import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SelectOperations } from '../../cajero/views';


export const AuthRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="login" element={ <Login /> } />
        <Route path="options" element={ <SelectOperations /> } />
        <Route path='/*' element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
