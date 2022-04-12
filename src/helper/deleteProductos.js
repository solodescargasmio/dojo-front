const deleteProducto=(id)=> {
    fetch(`http://localhost:8080/producto/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }})
    .then(data => data).catch(error=>window.alert("Error Delete "+error))
    .then(window.alert("El Producto se eliminó con exito"));
  }
  
  
  export default deleteProducto;