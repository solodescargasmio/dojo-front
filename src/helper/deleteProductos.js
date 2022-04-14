const deleteProducto=(id)=> {
    fetch(`https://ec2-3-234-141-85.compute-1.amazonaws.com/producto/${id}`, {
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