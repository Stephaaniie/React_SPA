import { Navigate, Route, Routes } from "react-router-dom";
import {
  Deposit,
  Extraction,
  CheckBalance,
  OperationCanceled,
  InsertOtherAmount,
  SuccessfulOperation,
  InsufficientBalance,
  SelectOperations,
} from "../../cajero/views/index";

export const CajeroRoutes = () => {
  return (
    <Routes>
        <Route path="extraer" element={ <Extraction /> } />
        <Route path="depositar" element={ <Deposit /> } />
        <Route path="saldo" element={ <CheckBalance /> } />
        <Route path="extraer-otro-monto" element={ <InsertOtherAmount /> } />
        <Route path="saldo-insuficiente" element={ <InsufficientBalance /> } />
        <Route path="cancel" element={ <OperationCanceled /> } />
        <Route path="realizado" element={ <SuccessfulOperation /> } />
        <Route path="auth/options" element = { <SelectOperations/> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
