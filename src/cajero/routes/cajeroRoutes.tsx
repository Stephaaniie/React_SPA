import { Navigate, Route, Routes } from "react-router-dom";
import { SelectOperations } from "../pages/SelectOperation"


export const CajeroRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <SelectOperations /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
