import { BrowserRouter , Route, Routes } from "react-router-dom";
import AgregarProducto from "../containers/AgregarProducto";
export default function Ruta(){
    return(
        <BrowserRouter>
             <Routes>
                <Route exact path="/index" element={<AgregarProducto />}>Home</Route>
            </Routes>
            
            
                
        </BrowserRouter>
    )
}