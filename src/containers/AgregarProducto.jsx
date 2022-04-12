import React,{ useState } from "react";
import putProducto,{ postProducto } from "../helper/postProducto";
import deleteProducto from "../helper/deleteProductos";
import getProductos from "../helper/getProducto";

const handleSubmit=(e)=>{
    e.preventDefault();
      const producto={
        id:e.target.idPro.value,
        nombre:e.target.nombre.value,
        precio:e.target.precio.value,
      }
      console.log("Producto "+producto.id)
      if(typeof e.target.id.value!=='undefined'){
        putProducto(producto)
      }
      else{
        postProducto(producto)
      }
  }
  

  
  const AgregarProducto = () => {
  
    const [check,setCheck] = useState(false)
    
    const mostrarNuevo = (e)=>{
      setCheck(e.target.checked)
    }
    const [idP,setIdP] = useState("")
  const eliminar = (e)=>{
    deleteProducto(idP)
  }
    return (
    <div className='container'>
  
      <form onSubmit={handleSubmit}>
  
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">ID Producto</label>
            <input type="text" className="form-control" id="idPro" placeholder="idPro " required="required"
            onChange={(e)=>setIdP(e.target.value)}/>
          </div>
          <div className="form-group col-lg-10">
            <label htmlFor="formGroupExampleInput2">Nombre </label>
            <input type="text" className="form-control" id="nombre" placeholder="Nombre " required="required"/>
          </div>
          <div className="form-group col-lg-10">
            <label htmlFor="formGroupExampleInput">Precio</label>
            <input type="text" className="form-control" id="precio" placeholder="Precio " required="required"/>
          </div>
          <div className="form-group">
  
          </div>
          {
          check ?
          <div className="form-group" >
            <div className="form-group">
              {/* <label htmlFor="formGroupExampleInput">ID Producto</label>
              <input type="text" className="form-control" id="id" placeholder="ID Producto"
               onChange={(e)=>setIdP(e.target.value)}/> */}
            </div>
            <button className='btn btn-primary'>Modificar</button>
            <button type="button" onClick={eliminar}>Eliminar</button>
          </div>
          :
          <div className="form-group">
            <button className='btn btn-primary'>Enviar</button>
          </div>
          }
          <div className="form-group">
          <label htmlFor="formGroupExampleInput">Modificar/Eliminar</label>
            <input type="checkbox"  name="nuevo" id="nuevo" onChange={mostrarNuevo}/>
          </div>
        
      </form>
    </div>
    )
  }
  
  export default AgregarProducto;