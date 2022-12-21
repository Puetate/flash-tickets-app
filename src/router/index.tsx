import { Route, Routes } from "react-router-dom";
import ClientRouter from "./ClientRouter";
export default function Router() {
   return (
      <Routes >
         <Route path="*" element={<ClientRouter />}/>
      </Routes>

   )
}